import { v4 as uuid } from "uuid";
import Stars from "../Stars/Stars";
import CourseHeaderStyles from "./CourseHeader.module.scss";

interface Props {
    title: string;
    description: string;
    rating: number;
    date: string;
    skills: string[];
}

const CourseHeader: React.FC<Props> = ({ title, description, rating, date, skills }) => {
    return (
        <section className={CourseHeaderStyles.header}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Stars rating={rating} />
            <span>Launch date: {String(new Date(date).toLocaleString())}</span>
            <span className={CourseHeaderStyles.skills}>
                Skills:{" "}
                {skills?.map((skill) => (
                    <span key={uuid()} className={CourseHeaderStyles.skill}>
                        {skill}
                    </span>
                ))}
            </span>
        </section>
    );
};
export default CourseHeader;
