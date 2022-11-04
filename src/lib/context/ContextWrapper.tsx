import { FC, ReactElement } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { ThemeContext, themeType } from './theme';

const ContextWrapper: FC<{ children: ReactElement }> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<themeType>('theme', 'dark');

  const toggleTheme = (): void => {
    setTheme((p) => (p === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ContextWrapper;
