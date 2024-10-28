import videoURL from "../../assets/video.mp4";
import imageURL from "../../assets/image.jpg";
import Typography from "../../components/atom/typography/Typography";
import Media from "../../components/atom/Media/Media";
import Container from "../../components/atom/Container/Container";
import Code from "../../components/molecule/Code/Code";
const Medias = () => {
  return (
    <Container spacing="medium">
      <Typography className="font-bold my-3  text-xl">
        These are the Media Components.
      </Typography>
      <Typography className="my-2 sm:text-xl font-semibold ">Video</Typography>
      <Media
        src={videoURL}
        type="video"
        className="sm:max-h-[300px]"
        controls
        muted
        autoPlay
      />
      <Code>
        {`<Media src={videoURL} 
  type="video"
  className="sm:max-h-[300px]"
  controls
  muted
  autoPlay 
/>`}
      </Code>
      <Typography className="my-2 mt-10 sm:text-xl font-semibold ">Image</Typography>
      <Media src={imageURL} type="image" className="h-72 w-72" />
      <Code>
        {`<Media 
  src={imageURL} 
  type="image" 
  className="h-72 w-72" 
/>`}
      </Code>
    </Container>
  );
};

export default Medias;
