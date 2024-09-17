import { ReactNode } from "react";

export default interface Project {
    title: string,
    languages: Array<string>,
    stack: Array<string>,
    tags: Array<string>,
    previewImage: string | null,
    shortDescription: string,
    projectPrompt: string | null,
    repoLink?: string,
    projectLink?: string,
    summary: ReactNode,
    lessons: ReactNode
}