import { createSlice } from "@reduxjs/toolkit";
import { topRatedAction } from "./topRatedAction";

const initialState = {
    topRated: [],
    loading: false,
    error: null
}

export const topRatedSlice = createSlice({
    name: 'topRated',
    initialState,
    reducers: {
        topRatedResult: (state, action) => {
            state.topRated = action.payload;
        }
    },
});

export const { topRatedResult }  = topRatedSlice.actions;
export default topRatedSlice.reducer;