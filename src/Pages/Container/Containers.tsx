import Container from "../../components/atom/Container/Container";
import Typography from "../../components/atom/typography/Typography";
import Code from "../../components/molecule/Code/Code";

const Containers = () => {
  return (
    <Container spacing="medium">
      <Typography className="text-lg font-bold">Container</Typography>
      <Container>
        <Code>
          {`<Container 
  spacing="medium"
  background="primary"
  center
  fillScreen
>
</Container>`}
        </Code>
      </Container>
    </Container>
  );
};

export default Containers;
