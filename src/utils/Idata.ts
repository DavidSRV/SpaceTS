
export interface Idata{
    destinations?:Idestinations,
    crew?:Icrew,
    technology?:Itechnology,
}

interface Iimages{
    png:string,
    webp:string
}

interface IimagesTechno{
    portrait:string,
    landscape:string
}

interface Idestinations{
    name:string,
    images: Iimages,
    description:string,
    distance:string,
    travel:string
}

interface Icrew{
    name:string,
    images:Iimages,
    role:string,
    bio:string
}

interface Itechnology{
    name:string,
    images:IimagesTechno,
    description:string
}

