import { FC, ReactElement, useEffect, useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { DarkModeBtn, Footer, Heading, Navbar } from '../../components';
import SearchHits from '../../components/Search/SearchHits';
import { algoliaSearchClient, algoliaSearchIndexName } from '../AlgoliaClent';
import useLocalStorage from '../hooks/useLocalStorage';
import { SettingsContext, themeType } from './settings';

const ContextWrapper: FC<{ children: ReactElement }> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<themeType>('theme', 'dark');
  const [searchModal, setSearchModal] = useState(false);
  const toggleTheme = (): void => {
    setTheme((p) => (p === 'light' ? 'dark' : 'light'));
  };
  const toggleSearchModal = (): void => {
    setSearchModal((p) => !p);
  };
  useEffect(() => {
    // Keyboard shortcut to open search modal Ctrl+K
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.ctrlKey && e.key === 'k') e.preventDefault();
      if (!searchModal && e.ctrlKey && e.key === 'k') {
        toggleSearchModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <SettingsContext.Provider
      value={{ theme, toggleTheme, searchModal, toggleSearchModal }}
    >
      <InstantSearch
        indexName={algoliaSearchIndexName}
        searchClient={algoliaSearchClient}
      >
        <div
          className={`min-h-screen bg-base-100 bg-gradient-to-bl from-[rgb(7,252,193,0.2)] to-[rgba(178,15,255,0.15)] font-bold text-base-content ${
            theme === 'light' ? 'theme-light' : 'theme-dark'
          }`}
        >
          <Navbar />
          {children}
          <div className="relative w-full bg-base-100">
            <div className="container relative mx-auto flex max-w-6xl flex-col gap-14 py-10">
              <div className="flex flex-col gap-5 px-2">
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
          {searchModal ? <SearchHits /> : null}
        </div>
        <DarkModeBtn />
      </InstantSearch>
    </SettingsContext.Provider>
  );
};

export default ContextWrapper;
