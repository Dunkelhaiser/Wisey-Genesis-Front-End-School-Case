import { faClock, faCheckCircle, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { LessonContext } from "../../store/LessonContext";
import LessonStyles from "./Lesson.module.scss";

export interface LessonType {
    order: number;
    title: string;
    duration: number;
    status: string;
    link: string;
}

const standardTime = (totalMins: number) => {
    const hours = Math.floor(totalMins / 60);
    const minutes = totalMins % 60;

    return `${hours}h ${minutes > 0 ? `${minutes}m` : ""}`;
};

const Lesson: React.FC<LessonType> = ({ order, title, duration, status, link }) => {
    const { lesson, setLesson } = useContext(LessonContext);
    return (
        <div
            className={`${LessonStyles.lesson} ${lesson === link ? LessonStyles.active : ""}`}
            onClick={status === "unlocked" ? () => setLesson(link) : undefined}
            role="button"
            tabIndex={0}
        >
            <FontAwesomeIcon icon={faCheckCircle} className={LessonStyles.check} />
            <div className={LessonStyles.stats}>
                <h3>
                    {order}. {title}
                </h3>
                <span className={LessonStyles.time}>
                    <FontAwesomeIcon icon={faClock} /> {standardTime(duration)}
                </span>
            </div>
            {status === "locked" && <FontAwesomeIcon icon={faLock} className={LessonStyles.lock} />}
        </div>
    );
};
export default Lesson;
