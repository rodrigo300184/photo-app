import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk(
  "search/fetchPhotos",
  async ({ query, currentPage }) => {
    const accesKey = process.env.REACT_APP_UNSPLASH_API_KEY;
    const baseURL = "https://api.unsplash.com/";
    const photosPerPage = 16;
    let url;
    if (query) {
      url = `${baseURL}search/photos?query=${query}&page=${currentPage}&per_page=${photosPerPage}&client_id=${accesKey}`;
    } else {
      url = `${baseURL}photos/random?client_id=${accesKey}&count=${photosPerPage}`;
    }
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return {results: query? (jsonResponse.results):(jsonResponse), totalPages: Math.ceil(response.headers.get("X-Total") / photosPerPage),
    };
  }
);
