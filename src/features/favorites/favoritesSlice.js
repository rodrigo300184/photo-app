import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: JSON.parse(localStorage.getItem("localFavs")) || [],
  length: JSON.parse(localStorage.getItem("localFavs")).length || 0,
  status: "idle",
  error: null,
};

const favoriteSlice = createSlice({
  name: "favoritePhotos",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      let repeated;
      state.favorites.forEach((photo) => {
        if(photo.id === action.payload.id){
          repeated = true;
          return
        } }
      );
      if (!repeated && state.favorites.length <= 50) {
        state.favorites.push(action.payload);
        localStorage.setItem("localFavs", JSON.stringify(state.favorites));
        state.length += 1;
      }
    },
    removePhoto: (state, action) => {
      state.favorites = state.favorites.filter(
        (photo) => photo.id !== action.payload.id
      );
      localStorage.setItem("localFavs", JSON.stringify(state.favorites));
      if (state.length > 0) {
        state.length -= 1;
      }
    },
    editDescription: (state, action) => {},
  },
  extraReducers: {},
});

export default favoriteSlice.reducer;
export const { addPhoto, removePhoto } = favoriteSlice.actions;
export const getFavPhotosStatus = (state) => state.favoritePhotos.status;
export const getFavPhotos = (state) => state.favoritePhotos.favorites;
export const getFavLength = (state) => state.favoritePhotos.length;
