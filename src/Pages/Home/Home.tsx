import Container from "../../components/atom/Container/Container";
import Typography from "../../components/atom/typography/Typography";
import Atom from "./Atom";
import Molecules from "./Molecules";

const Home = () => {
  return (
    <Container background="primary" spacing="medium" center fillScreen>
      <Typography tag="h1" className="font-bold text-lg">Design System</Typography>
      <Atom />
      <Molecules />
    </Container>
  );
};

export default Home;
