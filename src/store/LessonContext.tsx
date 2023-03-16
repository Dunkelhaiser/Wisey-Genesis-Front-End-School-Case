import { createContext, useMemo, useState } from "react";

interface LessonType {
    duration: number;
    id?: string;
    link: string;
    order: number;
    previewImageLink: string;
    status: string;
    title: string;
    type?: string;
}

type LessonContextType = {
    lesson: LessonType;
    setLesson: React.Dispatch<React.SetStateAction<LessonType>>;
};

interface Props {
    children: React.ReactNode;
}

const iLessonContextState = {
    lesson: {} as LessonType,
    setLesson: () => {},
};

export const LessonContext = createContext<LessonContextType>(iLessonContextState);

export const LessonContextProvider: React.FC<Props> = ({ children }) => {
    const [lesson, setLesson] = useState<LessonType>({} as LessonType);

    const values = useMemo(
        () => ({
            lesson,
            setLesson,
        }),
        [lesson]
    );

    return <LessonContext.Provider value={values}>{children}</LessonContext.Provider>;
};
