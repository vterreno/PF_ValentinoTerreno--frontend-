import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
    nombreE!: string;
    descripcionE!: string;
    anio!: string
  
    constructor(private expeS: ExperienciaService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
    onCreate(): void{
      const expe = new Experiencia(this.nombreE, this.descripcionE, this.anio);
      this.expeS.save(expe).subscribe(
        data =>{
          alert("Experiencia añadida correctamente");
          this.router.navigate(['']);
        }, err =>{
          alert("falló");
          this.router.navigate(['']);
        }
      )
    }
  
  }