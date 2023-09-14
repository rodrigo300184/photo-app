import { Box, ImageList, InputBase, Paper, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { getFavPhotos } from "../features/favorites/favoritesSlice";
import {Photo} from "../components/Photo";
import {OrderBy} from "../components/OrderBy";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {NoResults} from "../components/NoResults";

export default function Favorites() {
  const favPhotos = useSelector(getFavPhotos);
  const [photos, setPhotos] = useState(favPhotos);
  const [query, setQuery] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const handleWhileSearching = (e) => {
    setQuery(e.target.value);
  };

   useEffect(() => {
    let filterPhotos;
    if (query.length) {
      filterPhotos = photos.filter(
        (photo) => (photo.alt_description && photo.alt_description.toLowerCase().includes(query.toLowerCase())) || 
                   (photo.description && photo.description.toLowerCase().includes(query.toLowerCase()))
      );
    } else {
      filterPhotos = favPhotos;
    }
    const orderedPhotos = [...filterPhotos];

    switch (orderBy) {
      case "width":
        orderedPhotos.sort((a, b) => a.width - b.width);
        break;
      case "height":
        orderedPhotos.sort((a, b) => a.height - b.height);
        break;
      case "likes":
        orderedPhotos.sort((b, a) => a.likes - b.likes);
        break;
      case "date":
        orderedPhotos.sort((b, a) => a.date - b.date);
        break;
      default:
        break;
    }
    setPhotos(orderedPhotos);
  }, [query, orderBy, photos, favPhotos]);


  return (
     <> <Box sx={{ display: "flex", justifyContent: "center" }}>
    <Box
      className="search-bar"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Paper
        component="form"
        sx={{
          borderRadius: "30px",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
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
  <Box className="order-by">
    <OrderBy orderBy={orderBy} setOrderBy={setOrderBy}/>
  </Box>
  {photos.length===0 ? (<NoResults />) :(<ImageList sx={{ margin: "0px auto 50px", width: "80%" }} gap={25}>
    { photos.map((photo) => (
      <Photo key={photo.id} item={photo} fav={true} />)
    )}
  </ImageList>) }
  
</>)}
  


