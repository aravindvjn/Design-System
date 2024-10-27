import BoxProps from "./type";
import classNames from "classnames";

const Box = ({ className, children, hover,onClick }: BoxProps) => {
  const boxClasses = classNames(
    "border-2 p-3 sm:p-5 rounded text-sm sm:text-md sm:font-semibold ",
    {
      "sm:hover:bg-background sm:hover:text-primary cursor-pointer": hover,
    },
    className
  );
  return <div onClick={onClick} className={boxClasses}>{children}</div>;
};

export default Box;
