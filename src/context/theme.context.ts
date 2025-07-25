import { createContext } from 'react';
import { Themes } from '../enums';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const initialState: ThemeContextType = {
  theme: Themes.DarkPurple,
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialState);
