export interface ICurso {
    title: string;
    description: string;
    slug: string;
    image: string;
    modulo: Array<IModulo>
}
export interface IModulo {
    title: string;
    duracion: number;
    contenido: Array<IContenido>
}
export interface IContenido {
    description: string;
}

export interface IBootcampRealizado {
    curso: { title: string }
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
