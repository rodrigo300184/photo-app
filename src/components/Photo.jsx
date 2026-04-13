import React, { useState } from "react";
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
import Swal from "sweetalert2";
import { PhotoModal } from "./PhotoModal";
import { PhotoSkeleton } from "./PhotoSkeleton";

export const Photo = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const download = () => {
    const url = props.item.urls.regular;
    const fileName = props.item.description;
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, fileName))
      .catch((error) => console.log(error));
  };

  const handlefavorite = () => {
    if (props.item.favorite) {
      dispatch(removePhoto(props.item));
    } else {
      dispatch(addPhoto(props.item));
    }
  };
  const removefavorite = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removePhoto(props.item));
        Swal.fire("Deleted!", "Your photo has been deleted.", "success");
      }
    });
  };

  return (
    <ImageListItem key={props.item.id} sx={{ position: 'relative' }}>
      <Box sx={{ position: 'relative', width: '100%', height: '300px' }}>
        {!loaded && (
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <PhotoSkeleton />
          </Box>
        )}
        <img
          src={`${props.item.urls.thumb}?w=248&fit=crop&auto=format&h=300`}
          alt={props.item.alt_description}
          loading="lazy"
          id={props.item.id}
          onClick={handleOpen}
          onLoad={() => setLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
      {loaded && <ImageListItemBar
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
                sx={{
                  cursor: "pointer",
                  color: props.item.favorite ? "red" : "",
                }}
                onClick={handlefavorite}
              />
            )}
          </Box>
        }
      />}
      {loaded && <PhotoModal isOpen={open} item={props.item} handleClose={handleClose} />}
    </ImageListItem>
  );
};
