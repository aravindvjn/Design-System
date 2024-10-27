import React, { useState } from "react";
import Typographgy from "../components/atom/typography/Typography";
import Button from "../components/atom/button/Button";
const Buttons = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Typographgy
        text="These are a button component."
        className="pt-3 font-bold text-lg"
      />
      <Typographgy text="Primary Button." className="py-2" />
      <Button variant="primary">Primary</Button>
      <Typographgy text="Secondary Button." className="py-2" />
      <Button variant="secondary">Secondary</Button>
      <Typographgy text="Tertiary Button." className="py-2" />
      <Button variant="tertiary">Tertiary</Button>
      <Typographgy text="Customized Button with Loading Animation." className="py-2" />
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
