import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import NotFoundStyles from "./NotFound.module.scss";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Layout className="page_center">
            <h1 className={NotFoundStyles.background_text}>404</h1>
            <h2 className={NotFoundStyles.title}>Page not found</h2>
            <span className={NotFoundStyles.message}>Looks like the page you were looking for doesn&apos;t exist.</span>
            <Button type="button" label="Go Home" onClick={() => navigate("/")} />
        </Layout>
    );
};
export default NotFound;
