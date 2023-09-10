import { ImageList } from "@mui/material";
import { useSelector } from "react-redux";
import { getFavPhotos } from "../features/favorites/favoritesSlice";
import Photo from "../components/Photo";
import { useEffect, useState } from "react";
export default function Favorites() {
  const favPhotos = useSelector(getFavPhotos);
  const [photos, setPhotos] = useState(favPhotos);

  useEffect(() => setPhotos(favPhotos), [favPhotos]);

  return (
    <>
      <ImageList sx={{ margin: "0 auto", width: "80%" }} gap={25}>
        {photos.map((photo, id) => (
          <Photo key={id} item={photo} fav={true} />
        ))}
      </ImageList>
    </>
  );
}
