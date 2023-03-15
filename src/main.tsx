import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LessonContextProvider } from "./store/LessonContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <LessonContextProvider>
            <App />
        </LessonContextProvider>
    </React.StrictMode>
);
