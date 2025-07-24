import { useState, useMemo, useCallback } from "react";
import {
  formFieldsConfig,
  type FormFieldsState,
  type FormFieldsSetters,
} from "../configs/form-fields";
import { getSetterName, toCamelCase } from "../utils";

export const useFormFields = () => {
  const initialValues = useMemo(() => {
    return formFieldsConfig.reduce((acc, field) => {
      acc[field.key] = field.defaultValue;
      return acc;
    }, {} as FormFieldsState);
  }, []);

  const [fields, setFields] = useState<FormFieldsState>(initialValues);
  console.log("as");

  const setters = useMemo(() => {
    return formFieldsConfig.reduce((acc, field) => {
      const setterName = getSetterName(toCamelCase(field.key));

      acc[setterName] = ((key: string) => (value: string) => {
        setFields((prev) => ({ ...prev, [key]: value }));
      })(field.key);

      return acc;
    }, {} as FormFieldsSetters);
  }, []);

  const resetToDefaults = useCallback(() => {
    setFields(initialValues);
  }, [initialValues]);

  return {
    fields,
    setters,
    config: formFieldsConfig,
    resetToDefaults,
  };
};
