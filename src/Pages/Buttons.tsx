import { useState } from "react";
import Typographgy from "../components/atom/typography/Typography";
import Button from "../components/atom/button/Button";
const Buttons = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Typographgy className="pt-3 font-bold text-lg">
        These are a button components.
      </Typographgy>
      <Typographgy className="py-2">Primary Button.</Typographgy>
      <Button variant="primary">Primary</Button>
      <Typographgy className="py-2">Secondary Button.</Typographgy>
      <Button variant="secondary">Secondary</Button>
      <Typographgy className="py-2">Tertiary Button.</Typographgy>
      <Button variant="tertiary">Tertiary</Button>
      <Typographgy className="py-2">
        Customized Button with Loading Animation.
      </Typographgy>
      <Button
        className="bg-blue-700 text-white"
        onClick={() => setIsLoading(true)}
        isLoading={isLoading}
      >
        Click Me
      </Button>
    </div>
  );
};

export default Buttons;
