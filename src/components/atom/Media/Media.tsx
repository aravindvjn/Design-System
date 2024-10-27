import React from "react";
import { MediaProps } from "./type";
import getMediaClasses from "./utility";

const Media = ({
  src = "",
  alt = "",
  className = "",
  type = "image",
  ...rest
}: MediaProps) => {
  const mediaClasses = getMediaClasses({ className });
  return type === "video" ? (
    <video
      src={src}
      {...(rest as React.VideoHTMLAttributes<HTMLVideoElement>)}
      className={`${mediaClasses} aspect-video`}
    />
  ) : (
    <img
      src={src}
      className={mediaClasses}
      alt={alt}
      {...(rest as React.ImgHTMLAttributes<HTMLImageElement>)}
    />
  );
};
export default Media;
