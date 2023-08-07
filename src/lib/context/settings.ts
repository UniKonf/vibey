import { createContext } from 'react';

export interface SettingsContextInterface {
  searchModal: boolean;
  toggleSearchModal: () => void;
}
export const SettingsContext = createContext<SettingsContextInterface>({
  searchModal: false,
  toggleSearchModal: () => {},
});
