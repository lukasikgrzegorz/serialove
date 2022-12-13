import { createSlice } from "@reduxjs/toolkit";

import { fetchTrending } from "./operations";

const initialState = {
	items: [],
	actualBackgroud: "",
	isLoading: false,
	error: null,
};

const trendingSlice = createSlice({
	name: "trending",
	initialState,
	reducers: {
		setActualBackground(state, action) {
			state.actualBackgroud = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTrending.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchTrending.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = action.payload;
				state.actualBackgroud = action.payload[0].backdrop_path;
			})
			.addCase(fetchTrending.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const trendingReducer = trendingSlice.reducer;
export const { setActualBackground } = trendingSlice.actions;
