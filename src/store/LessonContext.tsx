import { createContext, useMemo, useState } from "react";

type LessonContextType = {
    lesson: string | null;
    setLesson: React.Dispatch<React.SetStateAction<string | null>>;
};

interface Props {
    children: React.ReactNode;
}

const iLessonContextState = {
    lesson: null,
    setLesson: () => {},
};

export const LessonContext = createContext<LessonContextType>(iLessonContextState);

export const LessonContextProvider: React.FC<Props> = ({ children }) => {
    const [lesson, setLesson] = useState<string | null>(null);

    const values = useMemo(
        () => ({
            lesson,
            setLesson,
        }),
        [lesson]
    );

    return <LessonContext.Provider value={values}>{children}</LessonContext.Provider>;
};
