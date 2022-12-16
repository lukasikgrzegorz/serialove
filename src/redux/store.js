import { configureStore } from "@reduxjs/toolkit";

import { trendingReducer } from "./trendingSlice";
import { searchReducer } from "./searchSlice";
import { detailsReducer } from "./detailsSlice";

export const store = configureStore({
	reducer: {
		trending: trendingReducer,
		search: searchReducer,
		details: detailsReducer,
	},
});
