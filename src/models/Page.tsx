export interface Subpage {
    title: string,
    link: string
}

export interface Page extends Subpage {
    subpages: Array<Subpage>
}
