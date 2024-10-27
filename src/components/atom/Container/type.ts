import React from "react";

interface ContainerProps {
    spacing?: "small" | "medium" | "large";
    className?: string;
    background?: "primary" | "secondary" | "tertiary"
    children?: React.ReactNode;
    fillScreen?: boolean,
    center?: boolean
}
export default ContainerProps;