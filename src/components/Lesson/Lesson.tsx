import { faClock, faCheckCircle, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { LessonContext, LessonType } from "../../store/LessonContext";
import LessonStyles from "./Lesson.module.scss";

const standardTime = (totalMins: number) => {
    const hours = Math.floor(totalMins / 60);
    const minutes = totalMins % 60;

    return `${hours}h ${minutes > 0 ? `${minutes}m` : ""}`;
};

const Lesson: React.FC<LessonType> = ({ order, title, duration, status, link, previewImageLink }) => {
    const { lesson, setLesson } = useContext(LessonContext);
    const [completed, setComplited] = useState(false);
    useEffect(() => {
        setComplited(localStorage.getItem(`video_${link}_completion`) === "true");
    }, []);
    return (
        <div
            className={`${LessonStyles.lesson} ${lesson.link === link ? LessonStyles.active : ""}`}
            onClick={status === "unlocked" ? () => setLesson({ order, title, duration, status, link, previewImageLink }) : undefined}
            role="button"
            tabIndex={0}
        >
            {completed && <FontAwesomeIcon icon={faCheckCircle} className={LessonStyles.check} />}
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
