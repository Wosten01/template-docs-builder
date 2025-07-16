import { createContext } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const initialState: ThemeContextType = {
  theme: "matrix",
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialState);
