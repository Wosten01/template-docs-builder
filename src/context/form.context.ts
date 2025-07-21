import { useFormFields } from "../hooks";
import { createHookProvider } from "../provider/prov";

export const { Provider: FormFieldsProvider, useHookContext: useFormFieldsContext } = 
  createHookProvider(useFormFields, 'FormFields');