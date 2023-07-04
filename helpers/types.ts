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
export interface IBlog {
    map(arg0: (item: IBlog, index: number) => import("react").JSX.Element): import("react").ReactNode;
    _id: string;
    title: string;
    excerpt: string;
    contentRaw: any; // Adjust this type to match the structure of `item.contentRaw`
    publishedAt: string;
    slug: { current: string };
    autor: { avatar: { asset: { url: string } }; nombre: string }[];
    // Add any other properties from the schema that you're using
  }
  