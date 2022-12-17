import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	watched: [],
	queque: [],
};

const myListSlice = createSlice({
	name: "myList",
	initialState,
	reducers: {
		addToWatched: (state, action) => {
			state.watched.push(action.payload);
		},
		addToQueque: (state, action) => {
			state.queque.push(action.payload);
		},
		removeFromWatched: (state, action) => {
			const index = state.watched.findIndex((item) => item.id === action.payload);
			state.watched.splice(index, 1);
		},
		removeFromQueque: (state, action) => {
			const index = state.queque.findIndex((item) => item.id === action.payload);
			state.queque.splice(index, 1);
		},
	},
});

export const myListReducer = myListSlice.reducer;
export const { addToWatched, addToQueque, removeFromWatched, removeFromQueque } =
	myListSlice.actions;
