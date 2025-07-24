import { CONFIG_CONSTANTS } from "../constants";
import type { FormFieldsState } from "./form-fields";

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
  title: string;
  blocks: Block[];
}

const parseTemplate = (templateString: string): StringWithTemplate => {
  return (fields: FormFieldsState) => {
    return templateString.replace(/\{(\w+)\}/g, (match, fieldName) => {
      return fields[fieldName as keyof FormFieldsState] || match;
    });
  };
};

const parseCodeTemplate = (code: CodeItem): CodeWithTemplate => {
  return (fields: FormFieldsState) => {
    if (typeof code === "string") {
      return code.replace(/\{(\w+)\}/g, (match, fieldName) => {
        return fields[fieldName as keyof FormFieldsState] || match;
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
      return parseTemplate(step)(fields)
    } else {
      const parsedCode = step.code ? parseCodeTemplate(step.code)(fields) : undefined
      
      return {
        text: parseTemplate(step.text)(fields),
        code: parsedCode,
      };
    }
  };
};



const blocksConfigRaw = CONFIG_CONSTANTS.CONTENT;

export const blocksConfig: Section[] = blocksConfigRaw.map((section) => ({
  ...section,
  blocks: (section.blocks as BlockRaw[]).map((block) => ({
    ...block,
    code: block.code ? parseCodeTemplate(block.code) : undefined,
    note: block.note ? parseTemplate(block.note) : undefined,
    steps: block.steps
      ? block.steps.map((step: StepItem) => parseStepTemplate(step))
      : undefined,
  })),
}));
