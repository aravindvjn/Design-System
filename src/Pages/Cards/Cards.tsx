import Container from "../../components/atom/Container/Container";
import Typography from "../../components/atom/typography/Typography";
import Card from "../../components/molecule/Card/Card";
import imageURL from "../../assets/image.jpg";
import Media from "../../components/atom/Media/Media";
import Button from "../../components/atom/button/Button";
import Code from "../../components/molecule/Code/Code";

const Cards = () => {
  return (
    <Container spacing="medium">
      <Typography className="text-xl font-bold">These are the Card Components</Typography>
      <Container className="lg:flex">
        <Container spacing="small" className="sm:max-w-[350px]">
          <Typography className="font-semibold my-2">
            Varient : Outline
          </Typography>
          <Card varient="outline">
            <Media src={imageURL} className="h-32 w-full" />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              laborum, dolores cupiditate vel temporibus at eveniet quos
              voluptas atque. Libero, minus ut mollitia quibusdam nesciunt
              recusandae reiciendis cupiditate ducimus aspernatur.
            </Typography>
            <Button variant="tertiary" className="w-fit">
              Read More...
            </Button>
          </Card>
        </Container>
        <Container spacing="small" className="sm:max-w-[350px]">
          <Typography className="font-semibold my-2 mt-10 sm:mt-4">
            Varient : Filled
          </Typography>
          <Card varient="filled">
            <Media src={imageURL} className="h-32 w-full" />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              laborum, dolores cupiditate vel temporibus at eveniet quos
              voluptas atque. Libero, minus ut mollitia quibusdam nesciunt
              recusandae reiciendis cupiditate ducimus aspernatur.
            </Typography>
            <Button className="w-fit bg-background text-black">
              Read More...
            </Button>
          </Card>
        </Container>
      </Container>
      <Container spacing="small">
        <Code>
          {`<Card varient="filled">
  <Media 
    src={imageURL} 
    className="h-32 w-full" 
  />
     <Typography>
        Lorem ipsum...
      </Typography>
  <Button 
    className="w-fit" 
    bg-background 
    text-black"
  >
    Read More...
  </Button>
</Card>`}
        </Code>
      </Container>
    </Container>
  );
};

export default Cards;
