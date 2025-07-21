import { useMemo, useState } from "react";
import {
  formFieldsConfig,
  type FormFieldsState,
  type FormFieldsSetters,
} from "../configs/form-fields";

export const useFormFields = () => {
  const initialValues = useMemo(() => {
    return formFieldsConfig.reduce((acc, field) => {
      acc[field.key] = field.defaultValue;
      return acc;
    }, {} as FormFieldsState);
  }, []);

  const [fields, setFields] = useState<FormFieldsState>(initialValues);

  const setters = useMemo(() => {
    return formFieldsConfig.reduce((acc, field) => {
      const setterName = `set${
        field.key.charAt(0).toUpperCase() + field.key.slice(1)
      }` as keyof FormFieldsSetters;
      acc[setterName] = ((key) => (value: string) => {
        setFields((prev) => {
          const newState = { ...prev, [key]: value };
          return newState;
        });
      })(field.key);
      return acc;
    }, {} as FormFieldsSetters);
  }, []);

  return {
    fields,
    setters,
    config: formFieldsConfig,
  };
};
