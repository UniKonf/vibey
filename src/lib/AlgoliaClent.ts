import algoliasearch from 'algoliasearch';
export const algoliaSearchIndexName = 'all-events';
const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_APIKEY as string
);
export const index = client.initIndex(algoliaSearchIndexName);
export const algoliaSearchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_APIKEY as string
);
