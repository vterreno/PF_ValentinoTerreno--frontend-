import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
    }
  }
}