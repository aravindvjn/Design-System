import React from "react";

export interface CardProps {
    children?: React.ReactNode;
    className?: string;
    varient?: 'outline' | 'filled'
}