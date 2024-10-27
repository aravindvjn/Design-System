import { useState } from "react";
import Container from "../../components/atom/Container/Container";
import Typography from "../../components/atom/typography/Typography";
import Button from "../../components/atom/button/Button";
import Code from "../../components/molecule/Code/Code";
const Buttons = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Container spacing="medium">
      <Typography tag="h1" className="pt-3 font-bold text-lg">
        These are a button components.
      </Typography>
      <Typography className="py-2">Primary Button.</Typography>
      <Button variant="primary">Primary</Button>
      <Typography className="py-2">Secondary Button.</Typography>
      <Button variant="secondary">Secondary</Button>
      <Typography className="py-2">Tertiary Button.</Typography>
      <Button variant="tertiary">Tertiary</Button>
      <Typography className="py-2">
        Customized Button with Loading Animation.
      </Typography>
      <Button
        className="bg-blue-700 text-white"
        onClick={() => setIsLoading(true)}
        isLoading={isLoading}
      >
        Click Me
      </Button>
      <Code>
{`<Button
  type = "button",
  className="text-white"
  isLoading={isLoading}
  variant:"primary",
  onClick={() => setIsLoading(true)}
>   
  Click Me
</Button>
`}
      </Code>
    </Container>
  );
};

export default Buttons;
