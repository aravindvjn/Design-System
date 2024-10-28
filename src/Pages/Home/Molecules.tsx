import Container from "../../components/atom/Container/Container";
import Typography from "../../components/atom/typography/Typography";
import Box from "../../components/atom/Box/Box";
import { useNavigate } from "react-router-dom";

const Molecules = () => {
  const navigate = useNavigate();
  return (
    <Container background="primary" spacing="medium" className=" w-full" center>
      <Typography tag="h1" className="font-semibold">
        Molecules
      </Typography>
      <Container className="flex gap-3">
        <Box onClick={() => navigate("/cards")} hover>
          Card
        </Box>
      </Container>
    </Container>
  );
};

export default Molecules;
