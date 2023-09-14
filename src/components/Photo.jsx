import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import { addPhoto, removePhoto } from "../features/favorites/favoritesSlice";
import { useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { saveAs } from "file-saver";
import NestedModal from "./NestedModal";

export const Photo = (props) => {
  const dispatch = useDispatch();
 
  const download = () => {
    const url = props.item.urls.regular;
    const fileName = props.item.description;
    fetch(url).then((response) => response.blob()).then((blob)=> saveAs(blob,fileName)).catch((error)=> console.log(error)); 
  };

  const handlefavorite = () => {
    if (props.item.favorite) {
      dispatch(removePhoto(props.item));
    } else {
      dispatch(addPhoto(props.item));
    }
  };
  const removefavorite = () => {
    dispatch(removePhoto(props.item));
  };
 
  return (
    <ImageListItem key={props.item.id}>
      <img
        src={`${props.item.urls.thumb}?w=248&fit=crop&auto=format&h=300`}
        alt={props.item.alt_description}
        loading="lazy"
        id={props.item.id}
      />
      <ImageListItemBar
        sx={{ overflow: "visible" }}
        title={
          props.item.description !== null
            ? props.item.description
            : props.item.alt_description
        }
        subtitle={`Photo by: ${props.item.user.name}`}
        actionIcon={
          <Box
            sx={{
              color: "rgba(255, 255, 255, 1)",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
            aria-label={`info about ${props.item.alt_description}`}
          >
            <DownloadIcon
              sx={{
                cursor: "pointer",
                paddingTop: "2px",
                fontSize: "1.55rem",
                marginRight: "3px",
              }}
              onClick={download}
            />
            {props.fav ? (
              <>
                <NestedModal photo={props.item} /> 
                <DeleteOutlineIcon
                  sx={{ cursor: "pointer" }}
                  onClick={removefavorite}
                />
              </>
            ) : (
              <FavoriteIcon
                sx={{ cursor: "pointer", color: props.item.favorite ? "red" : "" }}
                onClick={handlefavorite}
              />
            )}
          </Box>
        }
      />
    </ImageListItem>
  );
}
