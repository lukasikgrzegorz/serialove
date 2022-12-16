import { createSlice } from "@reduxjs/toolkit";
import { fetchByQuery } from "./operations";

const initialState = {
	hits: [],
	isLoading: false,
	error: null,
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setQuery(state, action) {
			state.query = action.payload;
		},
		clearHits(state) {
			state.hits = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchByQuery.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchByQuery.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.hits = action.payload;
			})
			.addCase(fetchByQuery.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const searchReducer = searchSlice.reducer;
export const { setQuery, clearHits } = searchSlice.actions;
