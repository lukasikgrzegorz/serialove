import { createSlice } from "@reduxjs/toolkit";

const savedWatched = JSON.parse(localStorage.getItem("watched"));
const savedQueque = JSON.parse(localStorage.getItem("queque"));

let initialState = {
	watched: [],
	queque: [],
	toggle: false,
};

if (savedWatched) {
	initialState.watched = [...savedWatched];
}

if (savedQueque) {
	initialState.queque = [...savedQueque];
}

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
		switchToggle: (state) => {
			state.toggle = !state.toggle;
		},
	},
});

export const myListReducer = myListSlice.reducer;
export const { addToWatched, addToQueque, removeFromWatched, removeFromQueque, switchToggle } =
	myListSlice.actions;
