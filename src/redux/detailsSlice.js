import { createSlice } from "@reduxjs/toolkit";
import { fetchByID } from "./operations";

const initialState = {
	data: {},
	cast: [],
	isLoading: false,
	error: null,
};

const detailsSlice = createSlice({
	name: "details",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchByID.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchByID.fulfilled, (state, action) => {
				state.data = action.payload.data;
				state.cast = action.payload.cast;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(fetchByID.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	},
});

export const detailsReducer = detailsSlice.reducer;
