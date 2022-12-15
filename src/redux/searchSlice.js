import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	query: "",
	hits: [],
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setQuery(state, action) {
			state.query = action.payload;
		},
	},
});

export const searchReducer = searchSlice.reducer;
export const { setQuery } = searchSlice.actions;
