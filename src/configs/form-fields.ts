import { CONFIG_CONSTANTS } from "../constants";

export interface FormFieldConfig {
  key: string;
  label: string;
  defaultValue: string;
  placeholder: string;
}

export const formFieldsConfig: FormFieldConfig[] =
  CONFIG_CONSTANTS.FORM_FIELDS_CONFIG_DATA;

export type FormFieldsState = {
  [K in FormFieldConfig["key"]]: string;
};

export type FormFieldsSetters = {
  [K in FormFieldConfig["key"] as `set${Capitalize<K>}`]: (
    value: string
  ) => void;
};
