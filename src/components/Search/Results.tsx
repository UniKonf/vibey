import { connectStateResults } from 'react-instantsearch-dom';
import Loader from '../Loader';
import SerachHits from './SerachHits';

/**
 * Search results component: Renders list on basis of search query
 */
export const Results = connectStateResults(
  ({ searchState, searchResults, searching }) => {
    console.log(searchState.query);

    if (searchState.query == null) return null;

    if (searching) return <Loader />;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    return searchResults && searchResults.nbHits !== 0 ? (
      <SerachHits />
    ) : (
      <p className="text-xl font-bold">
        No results have been found for {searchState.query}. Try searching for
        something else.
      </p>
    );
  }
);
