import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

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
    let windowTime = window.setTimeout

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active')
    }
  }
} 