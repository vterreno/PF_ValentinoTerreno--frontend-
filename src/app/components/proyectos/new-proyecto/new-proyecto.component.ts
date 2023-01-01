import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

    nombreP!: string;
    descripcionP!: string;
    demo!: string
    repo!:string
    img!:string
    proy: Proyecto = null
    url:void

    constructor(private proyectoS: ProyectoService, private router: Router, private activatedRoute:ActivatedRoute, private imgService:ImageService) { }
  
    ngOnInit(): void {
      
    }

    onCreate(): void{
      this.img = this.imgService.url
      const proy = new Proyecto(this.nombreP, this.descripcionP, this.demo, this.repo, this.img);
      this.proyectoS.save(proy).subscribe(
        data =>{
          alert("Proyecto añadido correctamente");
          this.router.navigate(['']);
        }, err =>{
          alert("falló");
          this.router.navigate(['']);
        }
      )
    }

    uploadImage($event:any) {
      const name = "proyecto_" + "new"
      const flag = false
      this.imgService.uploadImage($event, name, flag)
      console.log("Funcion upload anda")
    }

}
