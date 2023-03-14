import { lazy, Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Courses from "./pages/Courses";
import Loading from "./pages/Loading";
import "./scss/styles.scss";

// const Courses = lazy(() => import("./pages/Courses"));
const Course = lazy(() => import("./pages/Course"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={
                <>
                    <Header />
                    <main>
                        <Suspense fallback={<Loading />}>
                            <Outlet />
                        </Suspense>
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
            <Route path="/course/:id" element={<Course />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
