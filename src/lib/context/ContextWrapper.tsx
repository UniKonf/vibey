import { BackToTop, ThemeToggle } from '@/components';
import Layout from '@/components/layout/Layout';
import SearchHits from '@/components/Search/SearchHits';

import { algoliaSearchClient, algoliaSearchIndexName } from '../AlgoliaClent';
import { SettingsContext } from './settings';
import { FC, ReactElement, useEffect, useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';

const ContextWrapper: FC<{ children: ReactElement }> = ({ children }) => {
  const [searchModal, setSearchModal] = useState(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const toggleSearchModal = (): void => {
    setSearchModal((p) => !p);
  };
  useEffect(() => {
    //add loader so that refresh page will only show the chosen theme
    setInitialLoading(false);
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
    <SettingsContext.Provider value={{ searchModal, toggleSearchModal }}>
      {!initialLoading && (
        <InstantSearch
          indexName={algoliaSearchIndexName}
          searchClient={algoliaSearchClient}
        >
          <Layout>
            {children}
            {searchModal ? <SearchHits /> : null}
          </Layout>
          <ThemeToggle />
          <BackToTop />
        </InstantSearch>
      )}
    </SettingsContext.Provider>
  );
};

export default ContextWrapper;
