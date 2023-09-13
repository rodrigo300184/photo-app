import { Box, ImageList, Paper, IconButton, InputBase } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import {Photo} from "../components/Photo";
import SearchIcon from "@mui/icons-material/Search";
import {
  getPhotos,
  getPhotosStatus,
  getTotalPages,
} from "../features/search/searchSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../features/search/searchThunk";

export default function Search() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const photosStatus = useSelector(getPhotosStatus);
  const dispatch = useDispatch();
  const results = useSelector(getPhotos);
  let totalPages = useSelector(getTotalPages);

  const handlePageChange = (value) => {
    setCurrentPage(value);
    dispatch(fetchPhotos({ query: query, currentPage: value }));
  };
  const handleWhileSearching = (e) => {
    setCurrentPage(1);
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (photosStatus === "idle" ) {
      dispatch(fetchPhotos({ query: query, currentPage: currentPage }));
    } else if (photosStatus === "pending") {
      console.log("pending");
    } else if (photosStatus === "fulfilled") {
      console.log('fulfilled');
      let data = [];
      results.map((photo) => data.push(<Photo key={photo.id} item={photo} fav={false} />));
      setPhotos(data);
    } else {
      console.log("error");
    }
  }, [dispatch, photosStatus, results, query, currentPage]);

  useEffect(() => {
    if (query !== "") {
      dispatch(fetchPhotos({ query: query, currentPage: 1 }));
    }
  }, [dispatch, query]);

  return (
    <><Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box className="search-bar" sx={{ display: "flex", justifyContent: "center" }}>
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
      <ImageList sx={{ margin: "0 auto", width: "80%" }} gap={25}>
        {photos}
      </ImageList>

      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        sx={{ display: "flex", justifyContent: "center" , marginBottom:'50px'}}
        page={currentPage}
        onChange={(e, value) => handlePageChange(value)}
      />
    </>
  );
}
