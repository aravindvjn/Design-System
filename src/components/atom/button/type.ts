import React from "react";

type ButtonType = "submit" | "reset" | "button"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: ButtonType;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: () => void;
}
export default ButtonProps;