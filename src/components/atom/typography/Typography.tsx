import React from "react";
import TypographyPropsType from "./type";

const Typography = ({
  text = "",
  tag = "p",
  children,
  style,
  className,
  role,
  ariaLabel,
  ariaLabelledBy,
}: TypographyPropsType) => {
  return React.createElement(
    tag,
    {
      className: className,
      style: style,
      role: role,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
    },
    text,
    children
  );
};
export default Typography;
