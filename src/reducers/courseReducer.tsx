import { LessonType } from "../store/LessonContext";

export interface Course {
    containsLockedLessons: boolean;
    description: string;
    duration: number;
    id: string;
    launchDate: string;
    previewImageLink: string;
    rating: number;
    status: string;
    title: string;
    tags: string[];
    meta: {
        slug: string;
        skills: string[];
        courseVideoPreview: {
            duration: number;
            link: string;
            previewImageLink: string;
        };
    };
    lessons: LessonType[];
}

export const init = {
    loading: true,
    course: {} as Course,
    error: false,
};

type ReducerActions = { type: "fetch" } | { type: "success"; payload: Course } | { type: "error" };

export const courseReducer = (state: typeof init, action: ReducerActions) => {
    switch (action.type) {
        case "fetch":
            return {
                loading: true,
                error: false,
                course: {} as Course,
            };
        case "success":
            return {
                loading: false,
                error: false,
                course: action.payload,
            };
        case "error":
            return {
                loading: false,
                error: true,
                course: {} as Course,
            };
        default:
            return state;
    }
};
