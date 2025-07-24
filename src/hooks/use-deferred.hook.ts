import { useState, useEffect, useRef } from "react";
import { useDeferredValue } from "react";

export const useDeferredInput = (
  value: string,
  onChange: (value: string) => void
) => {
  const [localValue, setLocalValue] = useState(value);
  const deferredValue = useDeferredValue(localValue);

  const isUserInput = useRef(false);
  const localValueRef = useRef(localValue);

  useEffect(() => {
    localValueRef.current = localValue;
  }, [localValue]);

  useEffect(() => {
    if (value !== localValueRef.current) {
      setLocalValue(value);
      isUserInput.current = false;
    }
  }, [value]);

  useEffect(() => {
    if (isUserInput.current && deferredValue !== value) {
      onChange(deferredValue);
      isUserInput.current = false;
    }
  }, [deferredValue, onChange, value]);

  const setLocalValueUser = (val: string) => {
    isUserInput.current = true;
    setLocalValue(val);
  };

  return {
    localValue,
    setLocalValue: setLocalValueUser,
  };
};
