import React from "react";
import ButtonProps from "./type";
import getButtonClasses from "./utility";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className,
  style,
  variant,
  children = "Submit",
  onClick,
  isLoading,
  ...rest
}) => {
  const buttonClasses = getButtonClasses({variant, className, isLoading});
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      style={style}
      type={type}
      {...rest}
    >
      <span className={`flex gap-2 ${isLoading ? "animate-pulse" : ""}`}>
        {children}
      </span>
    </button>
  );
};

export default Button;
