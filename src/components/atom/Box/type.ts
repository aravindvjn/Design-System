import React from "react";

interface BoxProps {
    className?: string;
    children?: React.ReactNode;
    hover?: boolean;
    onClick?: () => void;
}
export default BoxProps;