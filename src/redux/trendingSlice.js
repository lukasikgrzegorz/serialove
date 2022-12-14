import { createSlice } from "@reduxjs/toolkit";

import { fetchTrending } from "./operations";

const initialState = {
	items: [],
	actualItem: {},
	isLoading: false,
	error: null,
};

const trendingSlice = createSlice({
	name: "trending",
	initialState,
	reducers: {
		setActualItem(state, action) {
			state.actualItem = action.payload;
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
				state.actualItem = {
					backdrop: action.payload[0].backdrop_path,
					title: action.payload[0].backdrop_name,
					rate: action.payload[0].vote_average,
					overview: action.payload[0].overview,
				};
			})
			.addCase(fetchTrending.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const trendingReducer = trendingSlice.reducer;
export const { setActualItem } = trendingSlice.actions;
