export interface IBootcampRealizado {
    _id: string;
    curso: Curso
    fechaDesde: string;
    fechaHasta: string;
    imagen: Image;
    proyectos: IProyectos[]
}
type Curso = {
    titulo: string;
    descripcion: string;
}

export interface IProyectos {
    titulo: string;
    descripcion: string;
    imagen: Image[];
}

type Image = {
    asset : {
        url : string;
    }
}