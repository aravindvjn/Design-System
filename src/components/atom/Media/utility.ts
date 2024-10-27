import classNames from "classnames";
import MediaProps from "./type";

const getMediaClasses = ({ className = "" }: MediaProps) => {
    const mediaClasses = classNames("rounded  object-cover", {
    }, className);
    return mediaClasses;
}

export default getMediaClasses