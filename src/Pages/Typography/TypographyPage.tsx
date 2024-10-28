import Container from "../../components/atom/Container/Container";
import Typography from "../../components/atom/typography/Typography";
import Code from "../../components/molecule/Code/Code";

const TypographyPage = () => {
  return <Container spacing="medium">
    <Typography className="text-xl  font-bold">Typography</Typography>
    <Code>
{`<Typography 
  tag="h1" 
  className="sm:text-xl  font-bold"
>
  Typography
</Typography>`}
    </Code>
  </Container>;
};

export default TypographyPage;
