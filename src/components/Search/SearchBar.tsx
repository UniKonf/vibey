import { SettingsContext } from '@/lib/context/settings';

import { SearchIcon } from '@/Icons';

import { FC, useContext } from 'react';

/**
 * Search bar component: Search input
 */
const SearchBar: FC = () => {
  const { toggleSearchModal } = useContext(SettingsContext);
  return (
    <div
      className="flex cursor-pointer select-none gap-2 rounded-2xl border-2 border-transparent bg-primary/60 p-2 text-xl hover:border-base-content md:p-4"
      onClick={toggleSearchModal}
    >
      <div className="flex flex-1 items-center gap-2 rounded-xl bg-base-content/30 px-4 py-2">
        <label htmlFor="search" className="block aspect-square w-5">
          <SearchIcon />
        </label>
        <p>Search...</p>
      </div>
      <label
        htmlFor="search"
        className="hidden cursor-pointer items-center gap-1 rounded-xl bg-base-content/30 p-4 font-mono font-medium md:flex"
      >
        <span className="grid place-content-center rounded-lg bg-base-content p-2 px-4 text-base-100">
          ⌘
        </span>
        <span>+</span>
        <span className="grid place-content-center rounded-lg bg-base-content p-2 px-4 text-base-100">
          K
        </span>
      </label>
    </div>
  );
};

export default SearchBar;
