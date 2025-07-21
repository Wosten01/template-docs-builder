import { useFormFields } from "../hooks";
import { createHookProvider } from "../providers/create-hook-provider";

export const { Provider: FormFieldsProvider, useHookContext: useFormFieldsContext } = 
  createHookProvider(useFormFields, 'FormFields');