import { Box, ImageList, Paper, IconButton, InputBase } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Photo from "../components/photo";
import SearchIcon from "@mui/icons-material/Search";
import { getPhotos, getTotalPages } from "../features/search/searchSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../features/search/searchThunk";

export default function Search() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const photos = useSelector(getPhotos);
  let totalPages = useSelector(getTotalPages);

  const handlePageChange = (e,value) => {
    setCurrentPage(value);
    dispatch(fetchPhotos({ query: query, currentPage: currentPage }));
  };
  const handleWhileSearching = (e) => {
    setCurrentPage(1);
    setQuery(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchPhotos({ query: query, currentPage: 1 }));
  }, [query, dispatch]);
  
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <ImageList sx={{ margin: "0 auto", width: "85%" }} gap={25}>
        {photos&&
          photos.length&&photos.map((item, id) => (
          <Photo key={id} item={item} />
        ))}
      </ImageList>
      
        <Pagination count={totalPages} variant="outlined" shape="rounded" sx={{display:'flex', justifyContent:'center'}} 
        page={currentPage}
        onChange={(e, value) => handlePageChange(e, value)}
        
        />
      
    </>
  );
}
