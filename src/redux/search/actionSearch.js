import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const search = createAsyncThunk(
    'users/search',
    async (_, { rejectWithValue, getState }) => {
        try{
            const state = getState();
            const searchText = state.search.searchText;
            const SEARCH_API = `https://api.themoviedb.org/3/search/multi?api_key=0edb3f05130ebfedfe4528ec1b02e92b&language=en-US&query=${searchText}&page=1&include_adult=false`;
            const response = await axios.get(SEARCH_API);
            console.log(response.data)
            return response.data.results;

        }catch(error) {
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data);
        }
    }
)