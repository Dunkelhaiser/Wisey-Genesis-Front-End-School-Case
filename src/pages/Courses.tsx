import { useEffect } from "react";
import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import LayoutStyles from "../components/Layout/Layout.module.scss";

const Courses = () => {
    const requestOptions = {
        method: "GET",
        redirect: "manual",
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YmNhY2Q2Mi1lNjM5LTRiNDctOTg5Ny04MDUxZDAwMzkxNzIiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MDQ3NTEsImV4cCI6MTY3OTcwNDc1MX0.IOBrS8IXZ0HygbnkoDZfbtCRAczecZxW--54NEdqnq4",
        },
    };

    useEffect(() => {
        fetch("http://api.wisey.app/api/v1/core/preview-courses", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <Layout className={LayoutStyles.courses}>
            <Card
                title="Lack of Motivation & How to Overcome It"
                preview="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
                count={2}
                rating={3.5}
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
                link="lack-of-motivation-how-to-overcome-it"
            />
            <Card
                title="Lack of Motivation & How to Overcome It"
                preview="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
                count={2}
                rating={3.5}
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
                link="lack-of-motivation-how-to-overcome-it"
            />
            <Card
                title="Lack of Motivation & How to Overcome It"
                preview="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
                count={2}
                rating={3.5}
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
                link="lack-of-motivation-how-to-overcome-it"
            />
            <Card
                title="Lack of Motivation & How to Overcome It"
                preview="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
                count={2}
                rating={3.5}
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
                link="lack-of-motivation-how-to-overcome-it"
            />
            <Card
                title="Lack of Motivation & How to Overcome It"
                preview="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
                count={2}
                rating={3.5}
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
                link="lack-of-motivation-how-to-overcome-it"
            />
            <Card
                title="Lack of Motivation & How to Overcome It"
                preview="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
                count={2}
                rating={3.5}
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
                link="lack-of-motivation-how-to-overcome-it"
            />
            <Card
                title="Lack of Motivation & How to Overcome It"
                preview="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
                count={2}
                rating={3.5}
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
                link="lack-of-motivation-how-to-overcome-it"
            />
            <Card
                title="Lack of Motivation & How to Overcome It"
                preview="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
                count={2}
                rating={3.5}
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
                link="lack-of-motivation-how-to-overcome-it"
            />
            <Card
                title="Lack of Motivation & How to Overcome It"
                preview="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
                count={2}
                rating={3.5}
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
                link="lack-of-motivation-how-to-overcome-it"
            />
            <Card
                title="Lack of Motivation & How to Overcome It"
                preview="https://digitallearning.eletsonline.com/wp-content/uploads/2019/03/Online-courses.jpg"
                count={2}
                rating={3.5}
                skills={[
                    "Aligning your goals with your motives",
                    "Overcoming decision paralysis",
                    "Reframing negative self-talk",
                    "Gaining clarity",
                    "Challenging yourself",
                ]}
                link="lack-of-motivation-how-to-overcome-it"
            />
        </Layout>
    );
};
export default Courses;
