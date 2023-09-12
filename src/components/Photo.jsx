import React, { useState } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";
import { addPhoto, removePhoto } from "../features/favorites/favoritesSlice";
import { useDispatch } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InfoIcon from "@mui/icons-material/Info";
import Modal from "./Modal";

export default function Photo(props) {
  const dispatch = useDispatch();
  const [favIcon, setFavIcon] = useState();
  const [modal, setModal] = useState();

  const download = () => {
    const aTag = document.createElement("a");
    aTag.href = props.item.urls.full;
    const filename = props.item.slug + ".jpg";
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const handlefavorite = () => {
    if (favIcon) {
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

  const handleInfo = () => {
    setModal(<Modal photo={props.item} open={true}/>);
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
        sx={{ overflow: "visible"}}
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
                cursor: 'pointer',
                paddingTop: "2px",
                fontSize: "1.55rem",
                marginRight: "3px",
              }}
              onClick={download}
            />
            {props.fav ? (
              <>
                {modal}
             <InfoIcon sx={{cursor: 'pointer' }} onClick={handleInfo} />

                <DeleteOutlineIcon sx={{cursor: 'pointer' }} onClick={removefavorite} />
              </>
            ) : (
              <FavoriteIcon
                sx={{cursor: 'pointer', color: favIcon ? "red" : "" }}
                onClick={handlefavorite}
              />
            )}
          </Box>
        }
      />
    </ImageListItem>
  );
}
