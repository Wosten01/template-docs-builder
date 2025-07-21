import { useState, useEffect, useDeferredValue } from "react";

export const useDeferredInput = (value: string, onChange: (value: string) => void) => {
  const [localValue, setLocalValue] = useState(value);
  const deferredValue = useDeferredValue(localValue);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (deferredValue !== value) {
      onChange(deferredValue);
    }
  }, [deferredValue, onChange, value]);

  return {
    localValue,
    setLocalValue,
  };
};