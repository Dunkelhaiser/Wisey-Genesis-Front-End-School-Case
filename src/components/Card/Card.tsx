import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Hls from "hls.js/dist/hls.min";
import Stars from "../Stars/Stars";
import CardStyles from "./Card.module.scss";

interface Props {
    link: string;
    preview: string;
    video: string;
    title: string;
    count: number;
    rating: number;
    skills: string[];
}
const Card: React.FC<Props> = ({ link, preview, video, title, count, rating, skills }) => {
    const [isHovered, setIsHovered] = useState(false);

    const videoRef = useRef(null);

    useEffect(() => {
        const videoPreview = videoRef.current;

        let hls: Hls;

        if (Hls.isSupported() && videoPreview) {
            hls = new Hls();
            hls.loadSource(video);
            hls.attachMedia(videoPreview);
        }
        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [video, isHovered]);

    return (
        <Link
            to={`/course/${link}`}
            className={CardStyles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={CardStyles.thumb}>
                {isHovered ? <video autoPlay loop muted ref={videoRef} /> : <img src={preview} alt="Preview" />}
            </div>
            <article>
                <h2>{title}</h2>
                <div>
                    <span>Lessons: {count}</span>
                    <Stars rating={rating} />
                </div>
                <span className={CardStyles.skills}>
                    Skills:{" "}
                    {skills?.map((skill) => (
                        <span key={uuid()} className={CardStyles.skill}>
                            {skill}
                        </span>
                    ))}
                </span>
            </article>
        </Link>
    );
};

export default Card;
