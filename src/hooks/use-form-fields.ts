import { useState, useMemo, useCallback, useEffect } from "react";
import {
  formFieldsConfig,
  type FormFieldsState,
  type FormFieldsSetters,
} from "../configs/form-fields";
import { getSetterName, storageUtils, toCamelCase } from "../utils";
import { CONFIG_CONSTANTS } from "../constants";


export const useFormFields = () => {
  const getInitialValues = useCallback(() => {
    return formFieldsConfig.reduce((acc, field) => {
      acc[field.key] = field.defaultValue;
      return acc;
    }, {} as FormFieldsState);
  }, []);

  const getStoredValues = useCallback((): FormFieldsState => {
    const initialValues = getInitialValues();
    const stored = storageUtils.getItem(CONFIG_CONSTANTS.STORAGE_KEY);
    if (!stored) return initialValues;
    return { ...initialValues, ...stored };
  }, [getInitialValues]);

  const [fields, setFields] = useState<FormFieldsState>(getStoredValues);

  useEffect(() => {
    storageUtils.setItem(CONFIG_CONSTANTS.STORAGE_KEY, fields);
  }, [fields]);

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
    const initialValues = getInitialValues();
    setFields(initialValues);
    storageUtils.removeItem(CONFIG_CONSTANTS.STORAGE_KEY);
  }, [getInitialValues]);

  return {
    fields,
    setters,
    config: formFieldsConfig,
    resetToDefaults,
  };
};