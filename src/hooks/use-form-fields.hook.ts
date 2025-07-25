import { useMemo, useCallback } from "react";
import {
  formFieldsConfig,
  type FormFieldsState,
  type FormFieldsSetters,
} from "../configs";
import { getSetterName, toCamelCase } from "../utils";
import { CONFIG_CONSTANTS } from "../constants";
import { useLocalStorage } from "./use-local-storage.hook";

export const useFormFields = () => {
  const getInitialValues = useCallback(() => {
    return formFieldsConfig.reduce((acc, field) => {
      acc[field.key] = field.defaultValue;
      return acc;
    }, {} as FormFieldsState);
  }, []);

  const initialValues = useMemo(() => getInitialValues(), [getInitialValues]);

  const [fields, setFields, removeFields] = useLocalStorage(
    CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.STORAGE_KEY,
    initialValues
  );

  const setters = useMemo(() => {
    return formFieldsConfig.reduce((acc, field) => {
      const setterName = getSetterName(toCamelCase(field.key));

      acc[setterName] = ((key: string) => (value: string) => {
        setFields((prev) => ({ ...prev, [key]: value }));
      })(field.key);

      return acc;
    }, {} as FormFieldsSetters);
  }, [setFields]);

  const resetToDefaults = useCallback(() => {
    removeFields();
  }, [removeFields]);

  return {
    fields,
    setters,
    config: formFieldsConfig,
    resetToDefaults,
  };
};
