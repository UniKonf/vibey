import { FC, useRef, useState } from 'react';
import { SearchBox } from 'react-instantsearch-dom';
import { SearchIcon } from '../../../Icons';

/**
 * Search bar component: Search input
 */
const SearchBar: FC = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={`flex cursor-pointer select-none gap-2 rounded-2xl border-2 bg-primary/60 p-4 text-xl ${
        hasFocus ? 'border-base-content' : 'border-transparent'
      }`}
    >
      <div className="flex flex-1 items-center gap-2 rounded-xl bg-base-content/30 px-4 py-0">
        <label htmlFor="search" className="block aspect-square w-5">
          <SearchIcon />
        </label>
        <SearchBox
          inputRef={inputRef}
          inputId="search"
          focusShortcuts={['ctrl', 'k']}
        />
      </div>
      <label
        htmlFor="search"
        className="hidden cursor-pointer items-center gap-1 rounded-xl bg-base-content/30 p-4 font-mono font-medium md:flex"
      >
        <span className="grid place-content-center rounded-lg bg-base-content p-2 px-4 text-base-100">
          Ctrl
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
