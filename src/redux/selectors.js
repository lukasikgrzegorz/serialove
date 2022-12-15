export const getTrending = (state) => state.trending.items;
export const getTrendingIsLoading = (state) => state.trending.isLoading;
export const getTrendingError = (state) => state.trending.error;
export const getActualItem = (state) => state.trending.actualItem;
export const getActualBackdrop = (state) => state.trending.actualItem.backdrop;

export const getHits = (state) => state.search.hits;
export const getQuery = (state) => state.search.query;
export const getSerchIsLoading = (state) => state.search.isLoading;
export const getSerchError = (state) => state.search.error;
