import { createContext } from 'react';
import { themes } from '../config';

export type themeType = typeof themes[number];

export interface ThemeContextInterface {
  theme: themeType;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextInterface>({
  theme: 'light',
  toggleTheme: () => {},
});
