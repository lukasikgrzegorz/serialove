import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "ba9435622413df35cd8d080b147a1f2b";

const client = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
});

export const fetchTrending = createAsyncThunk("trending/fetchAll", async (_, thunkAPI) => {
	try {
		const response = await client.get(`trending/tv/day?api_key=${API_KEY}`);
		console.log(response.data.results);
		return response.data.results;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const fetchByQuery = createAsyncThunk("search/fetchByQuery", async (query, thunkAPI) => {
	try {
		const response = await client.get(
			`search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
		);
		console.log(response.data.results);
		return response.data.results;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const fetchByID = createAsyncThunk("details/fetchByID", async (id, thunkAPI) => {
	try {
		const response = await client.get(`tv/${id}?api_key=${API_KEY}&language=en-US`);
		console.log(response.data);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
