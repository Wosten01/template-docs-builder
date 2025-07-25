import { useState, useCallback, useEffect } from "react";
export function useLocalStorage<T = boolean>(
  key: string,
  defaultValue: T
): [T, (v: T | ((prev: T) => T)) => void, () => void] {
  const [value, setValueState] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const setValue = useCallback((v: T | ((prev: T) => T)) => {
    setValueState((prev) =>
      typeof v === "function" ? (v as (prev: T) => T)(prev) : v
    );
  }, []);

  const removeValue = useCallback(() => {
    localStorage.removeItem(key);
    setValueState(defaultValue);
  }, [key, defaultValue]);

  return [value, setValue, removeValue];
}
