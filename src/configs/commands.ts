import { CONFIG_CONSTANTS } from '../constants';
import type { FormFieldsState } from './form-fields';

export type CommandTemplate = (fields: FormFieldsState) => string;

export interface Command {
  title: string;
  description?: string;
  code?: CommandTemplate;
  steps?: string[];
  note?: string,
}

export interface CommandGroup {
  group: string;
  commands: Command[];
}

const parseTemplate = (templateString: string): CommandTemplate => {
  return (fields: FormFieldsState) => {
    return templateString.replace(/\{(\w+)\}/g, (match, fieldName) => {
      return fields[fieldName as keyof FormFieldsState] || match;
    });
  };
};

const commandsConfigRaw = CONFIG_CONSTANTS.CONTENT


export const commandsConfig: CommandGroup[] = commandsConfigRaw.map(group => ({
  ...group,
  commands: group.commands.map(cmd => ({
    ...cmd,
    code: parseTemplate(cmd.code)
  }))
}));