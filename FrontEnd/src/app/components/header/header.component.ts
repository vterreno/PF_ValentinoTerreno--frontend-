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
    const menuBtn = document.querySelector('#menu-btn')
    const menuItems = document.querySelector('#menu-items')
    const menuLinks = document.querySelectorAll('#menu-items a[href^="#"]')

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


