import classNames from "classnames"
import { CardProps } from "./type"

export const getCardClasses = ({ className,varient }: CardProps) => {
    const cardClasses = classNames("flex flex-col gap-2 rounded-md", {
       "p-2.5 border-2" : varient === "outline",
       "bg-primary p-2.5 text-white" : varient === "filled"
    },
        className)
    return cardClasses;
}
