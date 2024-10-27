// MediaProps type definition
import MediaProps from "./type";
import getMediaClasses from "./utility";

const Media = ({
  src = "",
  alt = "",
  className = "",
  type = "image",
  autoplay = false,
  controls = false,
  loop = false,
  muted = false,
  poster = "",
}: MediaProps) => {
  const mediaClasses = getMediaClasses({ className });

  const renderMedia = () => {
    if (type === "video") {
      return (
        <video
          src={src}
          className={`${mediaClasses} aspect-video`}
          autoPlay={autoplay}
          controls={controls}
          loop={loop}
          muted={muted}
          poster={poster}
        />
      );
    } else {
      return <img src={src} className={mediaClasses} alt={alt} />;
    }
  };

  return <div className="media-container">{renderMedia()}</div>;
};

export default Media;
