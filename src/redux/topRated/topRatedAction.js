import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const topRatedAction = createAsyncThunk(
    'users/topRated',
    async (_, { rejectWithValue }) => {
        try{
            const TOP_RATED_API = `https://api.themoviedb.org/3/tv/top_rated?api_key=0edb3f05130ebfedfe4528ec1b02e92b`;
            const response = await axios.get(TOP_RATED_API);
            console.log(response.data)
            return response.data.results;

        }catch(error) {
            console.log(error.response.data.message)
            return rejectWithValue(error.response.data);
        }
    }
)