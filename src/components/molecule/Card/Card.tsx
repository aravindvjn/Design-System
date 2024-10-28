import Container from "../../atom/Container/Container";
import { CardProps } from "./type";
import { getCardClasses } from "./utility";

const Card = ({
  children,
  className,
  varient
}: CardProps) => {
    const cardClasses = getCardClasses({ className,varient }) 
  return (
    <Container className={cardClasses}>
      {children}
    </Container>
  );
};

export default Card;
