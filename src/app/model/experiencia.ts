export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    anio: string;

    constructor(nombreE: string, descripcionE: string, anio:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.anio = anio;
    }
}