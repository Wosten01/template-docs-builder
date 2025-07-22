import { useCallback, useEffect, useMemo, useState } from "react";
import {
  formFieldsConfig,
  type FormFieldsState,
  type FormFieldsSetters,
} from "../configs/form-fields";

const CACHE_KEY = "form-fields-cache";
const CACHE_INTERVAL = 1000;

export const useFormFields = () => {
  const initialValues = useMemo(() => {
    return formFieldsConfig.reduce((acc, field) => {
      acc[field.key] = field.defaultValue;
      return acc;
    }, {} as FormFieldsState);
  }, []);

  const [fields, setFields] = useState<FormFieldsState>(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedValues = cached ? JSON.parse(cached) : {};
    return { ...initialValues, ...cachedValues };
  });

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

  const resetToDefaults = useCallback(() => {
    setFields(initialValues);
    localStorage.removeItem(CACHE_KEY);
  }, [initialValues]);

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(fields));
    }, CACHE_INTERVAL);

    return () => clearInterval(interval);
  }, [fields]);

  return {
    initialValues,
    fields,
    setters,
    config: formFieldsConfig,
    resetToDefaults,
  };
};
