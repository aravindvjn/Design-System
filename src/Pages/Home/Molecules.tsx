import React from "react";
import Container from "../../components/atom/Container/Container";
import Typography from "../../components/atom/typography/Typography";
import Box from "../../components/atom/Box/Box";

const Molecules = () => {
  return (
    <Container background="primary" spacing="medium" className=" w-full" center>
      <Typography tag="h1" className="font-semibold">
        Molecules
      </Typography>
      <Container className="flex gap-3">
        <Box hover>Card</Box>
      </Container>
    </Container>
  );
};

export default Molecules;
