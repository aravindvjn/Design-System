import React from "react";

interface commonMediaProps {
    src?: string;
    alt?: string;
    className?: string;
    type?: 'image' | 'video';
}

export type ImageProps = commonMediaProps & React.ImgHTMLAttributes<HTMLImageElement>;
export type VideoProps = commonMediaProps & React.VideoHTMLAttributes<HTMLVideoElement>;

export type MediaProps = (ImageProps | VideoProps) & {
    onError?: () => void;
};
