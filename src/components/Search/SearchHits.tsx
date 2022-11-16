import { FC, useContext, useEffect, useRef } from 'react';
import { connectHits, HitsProvided } from 'react-instantsearch-core';
import { SearchBox } from 'react-instantsearch-dom';
import { SettingsContext } from '../../lib/context/settings';
import { EventInterface } from '../../lib/types';
import Event from '../Event';
import Heading from '../Heading';

type Props = HitsProvided<EventInterface>;

/**
 * Search hits component: List of results
 */
const SerchHits: FC<Props> = ({ hits }) => {
  const { toggleSearchModal } = useContext(SettingsContext);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();
    inputRef.current?.setAttribute('type', 'text');
    const escCLick = (e: globalThis.KeyboardEvent): void => {
      if (e.key === 'Escape')
        if (inputRef.current === document.activeElement)
          inputRef.current?.blur();
        else toggleSearchModal();
    };

    document.addEventListener('keydown', escCLick);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', escCLick);
    };
  }, []);
  return (
    <>
      <div
        className="fixed top-0 left-0 z-20 h-screen w-screen bg-base-100/60 supports-[backdrop-filter:blur(0px)]:bg-primary/10 supports-[backdrop-filter:blur(0px)]:backdrop-blur"
        onClick={toggleSearchModal}
      />
      <div className="container fixed top-0 left-1/2 z-20 mx-auto my-10 w-full max-w-6xl -translate-x-1/2 rounded-xl border border-base-content bg-base-100 p-5 md:p-10">
        <div className="flex flex-col gap-6">
          <SearchBox inputRef={inputRef} />
          <Heading
            title={`You are searching for ${
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              inputRef.current?.value !== '' ? inputRef.current?.value : '...'
            }`}
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {hits.map((hit: EventInterface) => (
              <Event event={hit} key={hit.id} />
            ))}
            {hits.length === 0 && (
              <div className="card text-2xl font-medium">
                <p>No results found try searching something different</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default connectHits<Props, EventInterface>(SerchHits);
