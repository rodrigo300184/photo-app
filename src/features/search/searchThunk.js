import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk(
  "search/fetchPhotos",
  async ({query, currentPage}) => {
    const accesKey = process.env.REACT_APP_UNSPLASH_API_KEY;
    const baseURL = 'https://api.unsplash.com/';
    const photosPerPage = 16;
    if (query) {
      const response = await fetch(
        `${baseURL}search/photos?query=${query}&page=${currentPage}&per_page=${photosPerPage}&client_id=${accesKey}`
      );
      const jsonResponse = await response.json();
      return {results:jsonResponse.results, totalPages: Math.ceil(response.headers.get('X-Total')/photosPerPage)};
    } else {
      const response = await fetch(
        `${baseURL}photos/random?client_id=${accesKey}&count=${photosPerPage}`
      );
      const jsonResponse = await response.json();
      return {results:jsonResponse, totalPages: Math.ceil(response.headers.get('X-Total')/photosPerPage)}; 
    }
  }
);
