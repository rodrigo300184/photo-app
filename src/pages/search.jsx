import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";
import { Box, ImageList, Paper, IconButton, InputBase } from "@mui/material";
import { Photo } from "../components/Photo";
import {
  getPhotos,
  getPhotosStatus,
  getTotalPages,
} from "../features/search/searchSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../features/search/searchThunk";
import { getFavPhotos } from "../features/favorites/favoritesSlice";
import { NoResults } from "../components/NoResults";

export default function Search() {
  const [loadPhotos, setLoadPhotos] = useState(false);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [favPhotos, setfavPhotos] = useState([]);
  const photosStatus = useSelector(getPhotosStatus);
  const dispatch = useDispatch();
  let results = useSelector(getPhotos);
  let totalPages = useSelector(getTotalPages);
  let favorites = useSelector(getFavPhotos);
  const handlePageChange = (value) => {
    setCurrentPage(value);
    dispatch(fetchPhotos({ query: query, currentPage: value }));
  };
  const handleWhileSearching = (e) => {
    setCurrentPage(1);
    setQuery(e.target.value);
  };

  useEffect(() => {
    setfavPhotos(favorites);
    if (photosStatus === "idle") {
      dispatch(fetchPhotos({ query: "", currentPage: currentPage }));
    } else if (photosStatus === "pending") {
      console.log("pending");
    } else if (photosStatus === "fulfilled") {
      setLoadPhotos(true);
    } else {
      console.log("error");
    }
  }, [dispatch, photosStatus, currentPage, favorites]);

  useEffect(() => {
    if (query !== "") {
      dispatch(fetchPhotos({ query: query, currentPage: 1 }));
    }
  }, [dispatch, query]);

  let resultFav = [];
  if (loadPhotos) {
    resultFav = results.map((photo) => {
      return { ...photo, favorite: false };
    });
    let favPhotosId = new Set(favPhotos.map((photo) => photo.id));
    resultFav.forEach((photo) => {
      if (favPhotosId.has(photo.id)) {
        photo.favorite = true;
      }
    });
  }
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          className="search-bar"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            component="form"
            sx={{
              marginBottom: "30px",
              borderRadius: "30px",
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 600,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search your photos"
              inputProps={{ "aria-label": "Search your photos" }}
              onChange={handleWhileSearching}
              autoComplete="on"
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </Box>
      {loadPhotos && (
        <ImageList sx={{ margin: "0 auto", width: "80%" }} gap={25}>
          {resultFav.map((photo) => (
            <Photo key={photo.id} item={photo} />
          ))}
        </ImageList>
      )}
      {resultFav.length === 0 && <NoResults />}

      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        sx={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}
        page={currentPage}
        onChange={(e, value) => handlePageChange(value)}
      />
    </>
  );
}
