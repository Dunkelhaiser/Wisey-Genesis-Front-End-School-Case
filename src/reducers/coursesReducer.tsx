export interface Course {
    containsLockedLessons: boolean;
    description: string;
    duration: number;
    id: string;
    launchDate: string;
    lessonsCount: number;
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
}

export const init = {
    loading: true,
    courses: [] as Course[],
    error: false,
};

type ReducerActions = { type: "fetch" } | { type: "success"; payload: Course[] } | { type: "error" };

export const coursesReducer = (state: typeof init, action: ReducerActions) => {
    switch (action.type) {
        case "fetch":
            return {
                loading: true,
                error: false,
                courses: [],
            };
        case "success":
            return {
                loading: false,
                error: false,
                courses: action.payload,
            };
        case "error":
            return {
                loading: false,
                error: true,
                courses: [],
            };
        default:
            return state;
    }
};
