import type { FormFieldsSetters } from "../configs";

export const toCamelCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

export const toKebabCase = (title: string): string => {
  return `${title.replace(/\s+/g, "-").toLowerCase()}`;
};

export const getSetterName = (camelCaseKey: string) =>
  `set${
    camelCaseKey.charAt(0).toUpperCase() + camelCaseKey.slice(1)
  }` as keyof FormFieldsSetters;
