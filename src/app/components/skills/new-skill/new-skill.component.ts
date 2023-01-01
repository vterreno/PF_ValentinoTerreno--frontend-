import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  titulo!: string;
  porcentaje!: number;

    constructor(private skillsS: SkillsService, private router: Router, private activatedRoute:ActivatedRoute) { }
  
    ngOnInit(): void {
      
    }

    onCreate(): void{
      const skill = new Skills(this.titulo, this.porcentaje * 3);
      this.skillsS.save(skill).subscribe(
        data =>{
          alert("Skill añadida correctamente");
          this.router.navigate(['']);
        }, err =>{
          alert("falló");
          this.router.navigate(['']);
        }
      )
    }

}
