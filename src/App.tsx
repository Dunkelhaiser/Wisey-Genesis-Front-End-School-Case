import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import "./scss/styles.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Courses />,
        errorElement: <NotFound />,
    },
]);

function App() {
    return (
        <>
            <Header />
            <main>
                <RouterProvider router={router} />
            </main>
        </>
    );
}

export default App;
