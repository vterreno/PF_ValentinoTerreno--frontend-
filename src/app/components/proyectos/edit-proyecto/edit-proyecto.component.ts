import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto: Proyecto = null
  constructor(private activatedRouter: ActivatedRoute, private proyectoService: ProyectoService, private router:Router, public imgService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.img = this.imgService.url
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
    this.imgService.clearURL()
  }

  uploadImage($event:any) {
    const id = this.activatedRouter.snapshot.params['id']
    const name = "proyecto_" + id
    const flag = false
    this.imgService.uploadImage($event, name, flag)
    console.log("Funcion upload anda")
  }

}
