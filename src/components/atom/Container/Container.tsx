import ContainerProps from "./type";
import classNames from "classnames";

const Container = ({
  spacing,
  className,
  children,
  background,
  fillScreen = false,
  center = false,
}: ContainerProps) => {
  const containerClasses = classNames(
    "",
    {
      "p-2 sm:p-4 lg:p-8": spacing === "small",
      "p-4 sm:p-8 lg:p-12": spacing === "medium",
      "p-8 sm:p-12 lg:p-16": spacing === "large",
      "bg-primary text-white": background === "primary",
      "bg-secondary text-white": background === "secondary",
      "bg-tertiary text-black": background === "tertiary",
      "min-h-screen": fillScreen,
      "flex justify-center items-center flex-col ": center,
    },
    className
  );
  return <div className={containerClasses}>{children}</div>;
};

export default Container;
