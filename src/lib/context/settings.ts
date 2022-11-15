import { createContext } from 'react';
import { themes } from '../config';

export type themeType = typeof themes[number];

export interface SettingsContextInterface {
  theme: themeType;
  toggleTheme: () => void;
  searchModal: boolean;
  toggleSearchModal: () => void;
}
export const SettingsContext = createContext<SettingsContextInterface>({
  theme: 'light',
  toggleTheme: () => {},
  searchModal: false,
  toggleSearchModal: () => {},
});
