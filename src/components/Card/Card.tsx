import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Stars from "../Stars/Stars";
import CardStyles from "./Card.module.scss";

interface Props {
    link: string;
    preview: string;
    title: string;
    count: number;
    rating: number;
    skills: string[];
}
const Card: React.FC<Props> = ({ link, preview, title, count, rating, skills }) => {
    return (
        <Link to={`/post/${link}`} className={CardStyles.card}>
            {preview && <div className={CardStyles.thumb} style={{ backgroundImage: `url(${preview})` }} />}
            <article>
                <h2>{title}</h2>
                <div>
                    <span>Lessons: {count}</span>
                    <Stars rating={rating} />
                </div>
                <span className={CardStyles.skills}>
                    Skills:{" "}
                    {skills.map((skill) => (
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
