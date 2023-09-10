import { configureStore } from "@reduxjs/toolkit";
import searchSlice from '../features/search/searchSlice.js';
import favoritesSlice from "../features/favorites/favoritesSlice.js";

export const store = configureStore({
        reducer: {
            photos: searchSlice,
            favoritePhotos: favoritesSlice,
        }
    });
