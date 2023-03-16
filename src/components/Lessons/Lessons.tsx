import { v4 as uuid } from "uuid";
import Lesson, { LessonType } from "../Lesson/Lesson";
import LessonsStyles from "./Lessons.module.scss";

interface Props {
    lessons: LessonType[];
}

const Lessons: React.FC<Props> = ({ lessons }) => {
    return (
        <section className={LessonsStyles.lessons}>
            {lessons?.map((lesson) => (
                <Lesson
                    order={lesson.order}
                    title={lesson.title}
                    duration={lesson.duration}
                    status={lesson.status}
                    link={lesson.link}
                    previewImageLink={lesson.previewImageLink}
                    key={uuid()}
                />
            ))}
        </section>
    );
};
export default Lessons;
