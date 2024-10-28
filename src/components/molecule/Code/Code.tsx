import Container from "../../atom/Container/Container";
import Typography from "../../atom/typography/Typography";
import CodeProps from "./type";

const Code = ({ children }: CodeProps) => {
  return (
    <Container className="mt-5 p-0 bg-gray-800 rounded-lg border border-gray-800  overflow-hidden w-100 sm:w-fit">
      <Container className="bg-white p-3 w-full">
        <Typography>Example Code:</Typography>
      </Container>
      <Container className="text-white overflow-x-scroll p-5 sm:p-8 sm:text-md text-sm lg:text-lg ">
        <pre>
          <code>{children}</code>
        </pre>
      </Container>
    </Container>
  );
};

export default Code;
