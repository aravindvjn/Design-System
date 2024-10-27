import Typography from "../../components/atom/typography/Typography";
import Container from "../../components/atom/Container/Container";
import Box from "../../components/atom/Box/Box";
import { useNavigate } from "react-router-dom";

const Atom = () => {
  const navigate = useNavigate();
  return (
    <Container background="primary" spacing="medium" className=" w-full" center>
      <Typography tag="h1" className="font-semibold">
        Atoms
      </Typography>
      <Container className="flex gap-3">
        <Box onClick={() => navigate("/buttons")} hover>
          Button
        </Box>
        <Box hover>Typography</Box>
        <Box onClick={() => navigate("/medias")} hover>
          Media
        </Box>
      </Container>
    </Container>
  );
};

export default Atom;
