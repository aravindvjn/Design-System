import React from "react";
import ButtonProps from "./type";
import classNames from "classnames";

const Button: React.FC<ButtonProps> = ({
  type = "button",
  className = "",
  style,
  variant,
  children = "Submit",
  onClick,
  isLoading,
  ...rest
}) => {
  const buttonClasses = classNames(
    "py-2 px-4 relative rounded cursor-pointer hover:shadow-md font-bold  overflow-hidden",
    {
      "bg-primary text-black": variant === "primary",
      "bg-secondary text-black": variant === "secondary",
      "bg-tertiary text-white": variant === "tertiary",
      "cursor-wait": isLoading,
    },
    className
  );
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
