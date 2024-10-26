interface TypographyPropsType {
    text?: string,
    tag?: keyof JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    role?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;

}
export default TypographyPropsType;