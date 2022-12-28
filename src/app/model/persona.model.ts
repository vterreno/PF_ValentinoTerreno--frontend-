export class persona {
    id?: number;
    nombre: string;
    segundoNombre?: string;
    apellido: string;
    descripcion: string
    img: string;
    pdf: string

    constructor(nombre:string, apellido:string, img:string, descripcion:string, segundoNombre:string, pdf:string) {
        this.nombre = nombre
        this.segundoNombre = segundoNombre
        this.apellido = apellido
        this.img = img
        this.descripcion = descripcion
        this.pdf = pdf
    }   
}