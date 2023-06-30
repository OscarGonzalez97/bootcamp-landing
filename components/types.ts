export interface IBootcampRealizado {
    title: string;
    description: string;
    date_from: string;
    date_to: string;
    image: string;
    projects: Array<IProjects>
}

export interface IProjects {
    title: string;
    description: string;
    image: Array<string>;
}