import { createSlice } from "@reduxjs/toolkit";
import { search } from "./actionSearch";

const initialState = {
    search: [],
    searchText: "",
    loading: false,
    error: null
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(search.pending, state => {
                state.loading = true;
            })
            .addCase(search.fulfilled, (state, action) => {
                state.loading = false;
                state.search = action.payload;
                state.searchText = "";
            })
            .addCase(search.rejected, (state, action) => {
                state.error = action.payload
            });
    },
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;