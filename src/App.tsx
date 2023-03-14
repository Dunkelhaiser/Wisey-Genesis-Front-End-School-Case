import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import "./scss/styles.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={
                <>
                    <Header />
                    <main>
                        <Outlet />
                    </main>
                </>
            }
            errorElement={
                <>
                    <Header />
                    <main>
                        <NotFound />
                    </main>
                </>
            }
        >
            <Route index element={<Courses />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
