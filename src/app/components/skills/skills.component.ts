import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  skills: Skills[] = [];

  constructor(private skillsS: SkillsService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.skillsS.lista().subscribe(
      data =>{
        this.skills = data;
      }
    )
  }


  deleteSkill(id?: number){
    if( id != undefined){
      this.skillsS.delete(id).subscribe(
        data => {
          this.cargarSkill();
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


