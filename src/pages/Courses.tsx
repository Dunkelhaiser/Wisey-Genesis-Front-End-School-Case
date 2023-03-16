import { useEffect, useReducer, useState } from "react";
import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import LayoutStyles from "../components/Layout/Layout.module.scss";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import { Course, coursesReducer, init } from "../reducers/coursesReducer";

const Courses = () => {
    const [state, dispatch] = useReducer(coursesReducer, init);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let token: { token: string };
        const setCourses = (posts: Course[]) => {
            dispatch({ type: "success", payload: posts });
        };
        const setError = () => {
            dispatch({ type: "error" });
        };
        const fetchCourses = async (url: string, bearerToken: string) => {
            dispatch({ type: "fetch" });
            try {
                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`,
                    },
                });
                if (res.ok) {
                    const json = await res.json();
                    setCourses(json.courses);
                } else {
                    setError();
                }
            } catch (err) {
                setError();
            }
        };

        const getToken = async () => {
            try {
                const res = await fetch("https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions");
                token = await res.json();
                fetchCourses("https://api.wisey.app/api/v1/core/preview-courses", token.token);
            } catch (err) {
                setError();
            }
        };
        getToken();
    }, []);

    const lastCourse = currentPage * 10;
    const firstCourse = lastCourse - 10;
    const currentPosts = state.courses?.slice(firstCourse, lastCourse);

    const loading = state.loading && <Loader />;
    const error = state.error && <p className={LayoutStyles.info}>Error!</p>;
    const nullInfo = currentPosts.length === 0 && !state.error && !state.loading && (
        <p className={LayoutStyles.info}>There are no courses</p>
    );

    return (
        <Layout className={LayoutStyles.courses}>
            {loading}
            {error}
            {nullInfo}
            {state.courses.length > 0 && <h1>Courses</h1>}
            {currentPosts?.map((course) => (
                <Card
                    key={course.id}
                    title={course.title}
                    preview={`${course.previewImageLink}/cover.webp`}
                    video={course.meta?.courseVideoPreview?.link}
                    count={course.lessonsCount}
                    rating={course.rating}
                    skills={course.meta.skills}
                    link={course.id}
                />
            ))}
            {state.courses.length > 0 && (
                <Pagination totalItems={state.courses.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            )}
        </Layout>
    );
};
export default Courses;
