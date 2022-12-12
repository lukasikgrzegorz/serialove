import { createSlice } from "@reduxjs/toolkit";

import { fetchTrending } from "./operations";

const initialState = {
	items: [],
	isLoading: false,
	error: null,
};

const trendingSlice = createSlice({
	name: "trending",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchTrending.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchTrending.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = action.payload;
			})
			.addCase(fetchTrending.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const trendingReducer = trendingSlice.reducer;
