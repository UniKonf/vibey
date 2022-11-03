import { FC } from 'react';
import { SearchIcon } from '../../Icons';

const SearchBar: FC = () => {
  return (
    <div
      tabIndex={0}
      className="flex cursor-pointer select-none gap-2 rounded-2xl bg-primary/60 p-4 text-xl outline-2 outline-offset-2 outline-transparent focus:outline-primary"
    >
      <div className="flex flex-1 items-center gap-2 rounded-xl bg-base-content/30 p-4">
        <span className="block aspect-square w-5">
          <SearchIcon />
        </span>
        <span>Search for...</span>
      </div>
      <div className="hidden items-center gap-1 rounded-xl bg-base-content/30 p-4 font-mono font-medium md:flex">
        <span className="grid place-content-center rounded-lg bg-base-content p-2 px-4 text-base-100">
          Ctrl
        </span>
        <span>+</span>
        <span className="grid place-content-center rounded-lg bg-base-content p-2 px-4 text-base-100">
          K
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
