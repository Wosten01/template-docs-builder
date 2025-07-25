import type { FormFieldsState } from "../configs/form-fields";
import { v4 as uuidv4 } from "uuid";

export type StepItem = string | { text: string; code?: CodeItem };
export type CodeItem =
  | string
  | { text: string; showArrow?: boolean; separateLines?: boolean };

export type StringWithTemplate = (fields: FormFieldsState) => string;
export type StepWithTemplate = (fields: FormFieldsState) => StepItem;
export type CodeWithTemplate = (fields: FormFieldsState) => CodeItem;

export interface Block {
  title: string;
  description?: string;
  code?: CodeWithTemplate;
  steps?: StepWithTemplate[];
  note?: StringWithTemplate;
}

interface BlockRaw {
  title: string;
  description?: string;
  code?: CodeItem;
  steps?: StepItem[];
  note?: string;
}

export interface Section {
  id: string;
  title: string;
  note?: StringWithTemplate;
  blocks?: Block[];
}

export interface SectionRaw {
  title: string;
  note?: string;
  blocks?: BlockRaw[];
}

export interface DocumentationRaw {
  title: string;
  description: string;
  content?: SectionRaw[];
}

export interface Documentation {
  title: string;
  description: string;
  content?: Section[];
}

const parseTemplate = (templateString: string): StringWithTemplate => {
  return (fields: FormFieldsState) => {
    return templateString.replace(/\{(\w+)\}/g, (match, fieldName) => {
      return fields[fieldName as keyof FormFieldsState] ?? match;
    });
  };
};

const parseCodeTemplate = (code: CodeItem): CodeWithTemplate => {
  return (fields: FormFieldsState) => {
    if (typeof code === "string") {
      return code.replace(/\{(\w+)\}/g, (match, fieldName) => {
        return fields[fieldName as keyof FormFieldsState] ?? match;
      });
    } else {
      return {
        text: parseTemplate(code.text)(fields),
        showArrow: code.showArrow,
        separateLines: code.separateLines,
      };
    }
  };
};

const parseStepTemplate = (step: StepItem): StepWithTemplate => {
  return (fields: FormFieldsState) => {
    if (typeof step === "string") {
      return parseTemplate(step)(fields);
    } else {
      return {
        text: parseTemplate(step.text)(fields),
        code: step.code ? parseCodeTemplate(step.code)(fields) : undefined,
      };
    }
  };
};

export const convertRawToParsedSections = (
  rawSections: DocumentationRaw
): Documentation => {
  return {
    title: rawSections.title,
    description: rawSections.description,
    content: rawSections.content
      ? rawSections.content.map((section) => ({
          id: uuidv4(),
          title: section.title,
          note: section.note ? parseTemplate(section.note) : undefined,
          blocks: section.blocks
            ? section.blocks.map((block) => ({
                title: block.title,
                description: block.description,
                code: block.code ? parseCodeTemplate(block.code) : undefined,
                note: block.note ? parseTemplate(block.note) : undefined,
                steps: block.steps
                  ? block.steps.map((step) => parseStepTemplate(step))
                  : undefined,
              }))
            : undefined,
        }))
      : undefined,
  };
};
