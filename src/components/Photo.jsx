import React, { useState } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import { addPhoto, removePhoto } from "../features/favorites/favoritesSlice";
import { useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Photo(props) {
  const dispatch = useDispatch();
  const [FavIcon, setFavIcon] = useState();

  const download = () => {
    const aTag = document.createElement("a");
    aTag.href = props.item.links.download;
    const filename = props.item.slug + ".jpg";
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const handlefavorite = () => {
    if (FavIcon) {
      setFavIcon(false);
      dispatch(removePhoto(props.item));
    } else {
      setFavIcon(true);
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
        sx={{overflow:'visible'}}
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
                paddingTop: "2px",
                fontSize: "1.55rem",
                marginRight: "3px",
              }}
              onClick={download}
            />
            {props.fav ? (<DeleteOutlineIcon onClick={removefavorite} />) : 
                         (<FavoriteIcon sx={{ color: FavIcon ? "red" : "" }}
                                              onClick={handlefavorite}/>)
            }
          </Box>
        }
      />
    </ImageListItem>
  );
}
