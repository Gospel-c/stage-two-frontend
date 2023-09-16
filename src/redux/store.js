import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './search/searchSlice';
import topRatedReducer from "./topRated/topRatedSlice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        topRated: topRatedReducer,
    },
});