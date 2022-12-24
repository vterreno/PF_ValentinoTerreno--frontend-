import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
    expe: Experiencia = null
    
    constructor(
      private expeS: ExperienciaService,
      private activatedRouter : ActivatedRoute,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.expeS.detail(id).subscribe(
        data =>{
          this.expe = data;
        }, err =>{
           alert("Error al modificar");
           this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.expeS.update(id, this.expe).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la experiencia");
          this.router.navigate(['']);
        }
      )
    }
  }
  
