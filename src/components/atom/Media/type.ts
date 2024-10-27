interface MediaProps {
    src?: string;
    alt?: string;
    className?: string;
    type?: 'image' | 'video';
    autoplay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    poster?: string;
    preload?: "auto" | "metadata" | "none";
}
export default MediaProps;