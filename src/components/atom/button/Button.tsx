import React from "react";
import ButtonProps from "./type";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className = "",
  style,
  children = "Submit",
  onClick,
  ...rest
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={style}
      type={type}
      {...rest}
    >
      <span className="flex gap-2">{children}</span>
    </button>
  );
};

export default Button;
