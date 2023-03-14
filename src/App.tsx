import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Courses from "./pages/Courses";
import "./scss/styles.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Courses />,
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
