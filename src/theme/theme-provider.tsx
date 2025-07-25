import { useEffect, useState, type ReactNode } from "react";
import { storageUtils } from "../utils";
import { initialState, ThemeContext } from "../context/theme.context";
import { CONFIG_CONSTANTS } from "../constants";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, _setTheme] = useState<string>(initialState.theme);

  useEffect(() => {
    const storedTheme = storageUtils.getItem(
      CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.THEME_KEY
    );
    if (storedTheme) {
      _setTheme(JSON.parse(storedTheme as string));
    }
  }, []);

  const setTheme = (theme: string) => {
    storageUtils.setItem(
      CONFIG_CONSTANTS.LOCAL_STORAGE_KEYS.THEME_KEY,
      JSON.stringify(theme)
    );
    _setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
