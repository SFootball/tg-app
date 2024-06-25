import { useEffect } from "react";

const preloadImg = (src: string) => {
  const img = new Image();
  img.src = src;
};

export const usePreloadImages = (imgPaths: string[]) => {
  useEffect(() => {
    imgPaths.forEach((src) => preloadImg(src));
  }, [imgPaths]);
};
