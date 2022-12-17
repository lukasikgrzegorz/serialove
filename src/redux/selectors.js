export const getTrending = (state) => state.trending.items;
export const getTrendingIsLoading = (state) => state.trending.isLoading;
export const getTrendingError = (state) => state.trending.error;
export const getActualItem = (state) => state.trending.actualItem;
export const getActualBackdrop = (state) => state.trending.actualItem.backdrop;

export const getHits = (state) => state.search.hits;
export const getSerchIsLoading = (state) => state.search.isLoading;
export const getSerchError = (state) => state.search.error;

export const getDetails = (state) => state.details.data;
export const getDetailsCast = (state) => state.details.cast;
export const getDetailsIsLoading = (state) => state.details.isLoading;
export const getDetailsError = (state) => state.details.error;

export const getWatched = (state) => state.myList.watched;
export const getQueque = (state) => state.myList.queque;
