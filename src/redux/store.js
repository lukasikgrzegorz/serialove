import { configureStore } from "@reduxjs/toolkit";

import { trendingReducer } from "./trendingSlice";
import { searchReducer } from "./searchSlice";

export const store = configureStore({
	reducer: {
		trending: trendingReducer,
		search: searchReducer,
	},
});
