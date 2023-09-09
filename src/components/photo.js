import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadIcon from "@mui/icons-material/Download";

export default function photo(props) {
  const download = () => {
    const aTag = document.createElement("a");
    aTag.href = props.item.links.download;
    const filename = props.item.slug + ".jpg";
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const favorite = () => {};

  return (
    <ImageListItem key={props.item.id}>
      <img
        src={`${props.item.urls.thumb}?w=248&fit=crop&auto=format&h=300`}
        //srcSet={`${item.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={props.item.alt_description}
        loading="lazy"
        id={props.item.id}
      />
      <ImageListItemBar
        title={props.item.description!==null? props.item.description:props.item.alt_description}
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

