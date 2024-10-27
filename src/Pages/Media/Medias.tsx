import videoURL from "../../assets/video.mp4";
import imageURL from "../../assets/image.jpg";
import Typography from "../../components/atom/typography/Typography";
import Media from "../../components/atom/Media/Media";
import Container from "../../components/atom/Container/Container";
const Medias = () => {
  return (
    <Container>
      <Typography className="font-bold my-3  text-lg">
        These are the Media Components.
      </Typography>
      <Typography className="my-2">Video.</Typography>
      <Media src={videoURL} type="video" controls />
      <Typography className="my-2">Image.</Typography>
      <Media src={imageURL} className="h-72 w-72" />
    </Container>
  );
};

export default Medias;
