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

}

const menuBtn = document.querySelector('#menu-btn')
const menuItems = document.querySelector('#menu-items')

menuBtn?.addEventListener('click', ( ) => {
  menuItems?.classList.toggle('activate')
  })
