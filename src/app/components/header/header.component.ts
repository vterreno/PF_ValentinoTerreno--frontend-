import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnClick() {
    let menuBtn = document.querySelector('#menu-btn')
    let menuItems = document.querySelector('#menu-items')
    let menuLinks = document.querySelectorAll('#menu-items a[href^="#"]')


    menuBtn?.addEventListener('click', ( ) => {
      menuItems?.classList.toggle('activate')
    })

    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", function() {
        menuItems?.classList.remove('activate')
      })
    })
  }
}


