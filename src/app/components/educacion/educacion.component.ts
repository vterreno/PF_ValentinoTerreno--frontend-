import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { EducacionService } from 'src/app/service/educacion.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  expe: Experiencia[] = []

  constructor(private educacionS: EducacionService, private expeS:ExperienciaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }



  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }
  
  cargarExperiencia(): void {
    this.expeS.lista().subscribe(
      data => {
        this.expe = data
      }
    )
  }


  deleteEdu(id?: number){
    if( id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

  deleteExp(id?: number){
    if( id != undefined){
      this.expeS.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }


}


/*Animacion fade-in*/
window.addEventListener('scroll', revelar);

function revelar() {
  const reveals = document.querySelectorAll('.animacion')

  for(let i = 0; i < reveals.length; i++) {
    
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 25;
    let windowTime = window.setTimeout

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active')
    }
  }
} 