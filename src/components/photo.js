import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";

export default function photo({ item }) {
  const download = () => {
    const aTag = document.createElement("a");
    aTag.href = item.img;
    const filename = item.title + ".jpg";
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const favorite = () => {};

  return (
    <ImageListItem key={item.id}>
      <img
        src={`${item.urls.thumb}?w=248&fit=crop&auto=format&h=300`}
        srcSet={`${item.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.alt_description}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.description}
        actionIcon={
          <Box
            sx={{
              color: "rgba(255, 255, 255, 1)",
              display: "flex",
              alignItems: "center",
              marginRight: "5px",
            }}
            aria-label={`info about ${item.title}`}
          >
            <DownloadIcon
              sx={{ paddingTop: "2px", fontSize: "1.55rem", marginRight:'3px' }}
              onClick={download}
            />
            <FavoriteIcon onClick={favorite} />
          </Box>
        }
      />
    </ImageListItem>
  );
}

