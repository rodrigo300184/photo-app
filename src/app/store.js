import { configureStore } from "@reduxjs/toolkit";
import searchSlice from '../features/search/searchSlice.js';

export const store = configureStore({
        reducer: {
            photos: searchSlice,
        }
    });
