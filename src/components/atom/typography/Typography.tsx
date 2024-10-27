import React from "react";
import TypographyPropsType from "./type";
import classNames from "classnames";

const Typography: React.FC<TypographyPropsType> = ({
  tag = "p",
  children,
  style,
  className,
  role,
  ariaLabel,
  ariaLabelledBy,
}) => {
  const typoClasses = classNames(
    {
      "text-sm sm:text-md": tag === "p",
    },
    className
  );
  return React.createElement(
    tag,
    {
      className: typoClasses,
      style: style,
      role: role,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
    },
    children
  );
};
export default Typography;
