import React from "react";
import TypographyPropsType from "./type";

const Typography: React.FC<TypographyPropsType> = ({
  tag = "p",
  children,
  style,
  className,
  role,
  ariaLabel,
  ariaLabelledBy,
}) => {
  return React.createElement(
    tag,
    {
      className: className,
      style: style,
      role: role,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
    },
    children
  );
};
export default Typography;
