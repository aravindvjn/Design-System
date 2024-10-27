import React from "react";

type ButtonType = "submit" | "reset" | "button";
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: ButtonType;
    className?: string;
    variant?: ButtonVariant;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    isLoading?: boolean;
    onClick?: () => void;
}
export default ButtonProps;