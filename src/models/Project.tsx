export default interface Project {
    title: string,
    languages: Array<string>,
    stack: Array<string>,
    tags: Array<string>,
    previewImage: string | null,
    description: string,
    shortDescription: string,
    projectPrompt: string | null,
    projectLink: string | null
}