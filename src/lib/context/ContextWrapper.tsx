import { useRouter } from 'next/router';
import { FC, ReactElement } from 'react';
import { Footer, Heading, Hero, Navbar } from '../../components';
import useLocalStorage from '../hooks/useLocalStorage';
import { ThemeContext, themeType } from './theme';

const ContextWrapper: FC<{ children: ReactElement }> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<themeType>('theme', 'dark');

  const toggleTheme = (): void => {
    setTheme((p) => (p === 'light' ? 'dark' : 'light'));
  };
  const router = useRouter();
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className={`min-h-screen bg-base-100 bg-gradient-to-bl from-[rgb(7,252,193,0.2)] to-[rgba(178,15,255,0.15)] font-bold text-base-content ${
            theme === 'light' ? 'theme-light' : 'theme-dark'
          }`}
        >
          <Navbar />
          {router.pathname === '/' && <Hero />}
          <div
            className={
              router.pathname === '/'
                ? 'relative z-10 rounded-t-3xl border-2 border-b-0 border-primary bg-base-100/50 backdrop-blur-lg'
                : ''
            }
          >
            <div className="container mx-auto flex flex-col gap-14 py-10 px-2">
              {children}
              <div className="flex flex-col gap-6">
                <Heading title="Add your Event" />
                <div className="card max-w-max text-2xl font-medium">
                  <p>
                    1. Fork the repo github.com
                    <br /> 2. Add Event data in markdown file
                    <br /> 3. Create pull request and Your event will be live.
                    <br /> 4. That’s it. Just that.
                  </p>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default ContextWrapper;
