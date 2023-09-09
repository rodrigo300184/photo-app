import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotos } from "./searchThunk";

const initialState = {
  results: {},
  totalPages: 1,
  status: "idle",
  error: null,
};

const searchSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchPhotos.pending, (state, action) => {
      state.status = "pending";
    })
    .addCase(fetchPhotos.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.results = action.payload.results;
      state.totalPages = action.payload.totalPages;
    })
    .addCase(fetchPhotos.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message;
    })
  }
});


export default searchSlice.reducer;
export const getPhotosStatus = (state) => state.photos.status;
export const getPhotos = (state) => state.photos.results;
export const getTotalPages = (state) => state.photos.totalPages;
