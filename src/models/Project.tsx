import { ReactNode } from "react";

export default interface Project {
    title: string,
    languages: Array<string>,
    stack: Array<string>,
    tags: Array<string>,
    previewImage: string | null,
    shortDescription: string,
    projectPrompt: string | null,
    projectLink: string | null,
    summary: ReactNode,
    lessons: ReactNode
}