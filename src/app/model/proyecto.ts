export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    demo: string;
    repo: string;
    img: string;

    constructor(nombreP: string, descripcionP: string, demo:string, repo:string, img:string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.demo = demo;
        this.repo = repo
        this.img = img
    }
}
