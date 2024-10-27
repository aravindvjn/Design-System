import classNames from "classnames";
import ButtonProps from "./type";

const getButtonClasses = ({ variant, className, isLoading }: ButtonProps) => {
    const buttonClasses = classNames(
        "py-2 px-4 relative rounded cursor-pointer hover:shadow-md font-bold  overflow-hidden",
        {
            "bg-primary text-white": variant === "primary",
            "bg-secondary text-white": variant === "secondary",
            "bg-tertiary text-black": variant === "tertiary",
            "cursor-wait": isLoading,
        },
        className
    );
    return buttonClasses;
}

export default getButtonClasses
