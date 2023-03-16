import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseHeader from "../components/CourseHeader/CourseHeader";
import Layout from "../components/Layout/Layout";
import Lessons from "../components/Lessons/Lessons";
import Player from "../components/Player/Player";
import LayoutStyles from "../components/Layout/Layout.module.scss";
import { LessonContext } from "../store/LessonContext";

const Course = () => {
    const params = useParams();
    const [course, setCourse] = useState();
    const { lesson } = useContext(LessonContext);

    useEffect(() => {
        let token: { token: string };
        const fetchCourses = async () => {
            try {
                const res = await fetch(`https://api.wisey.app/api/v1/core/preview-courses/${params.id}`, {
                    headers: {
                        Authorization: `Bearer ${token.token}`,
                    },
                });
                const selectedCourse = await res.json();
                setCourse(selectedCourse);
                console.log(selectedCourse);
            } catch (error) {
                console.log("error", error);
            }
        };
        const getToken = async () => {
            try {
                const res = await fetch("https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions");
                token = await res.json();
                fetchCourses();
            } catch (err) {
                console.log("error", err);
            }
        };
        getToken();
    }, []);

    return (
        <Layout className={LayoutStyles.course}>
            <CourseHeader
                title="Lack of Motivation & How to Overcome It"
                description="Reignite your inner drive by managing factors that dampen your motivation."
                rating={3.5}
                date="2023-03-06T16:50:06.000Z"
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
            />
            <Player source={lesson || "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"} />
            <Lessons
                lessons={[
                    {
                        title: "Why we lack motivation",
                        duration: 255,
                        order: 1,
                        status: "unlocked",
                        link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8",
                    },
                    {
                        title: "Decision paralysis",
                        duration: 266,
                        order: 2,
                        status: "unlocked",
                        link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-2/AppleHLS1/lesson-2.m3u8",
                    },
                    {
                        title: "Negative self-talk",
                        duration: 285,
                        order: 3,
                        status: "locked",
                        link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-3/AppleHLS1/lesson-3.m3u8",
                    },
                    {
                        title: "Lack of clarity",
                        duration: 293,
                        order: 4,
                        status: "locked",
                        link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-4/AppleHLS1/lesson-4.m3u8",
                    },
                    {
                        title: "Lack of challenges",
                        duration: 275,
                        order: 5,
                        status: "locked",
                        link: "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-5/AppleHLS1/lesson-5.m3u8",
                    },
                ]}
            />
        </Layout>
    );
};
export default Course;
