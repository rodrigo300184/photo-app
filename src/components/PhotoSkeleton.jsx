import React from "react";
import { Skeleton } from "@mui/material";

export const PhotoSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      width="100%"
      height={300}
      animation="wave"
    />
  );
};
