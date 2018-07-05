import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-vista',
  templateUrl: './menu-vista.component.html',
  styleUrls: ['./menu-vista.component.css']
})
export class MenuVistaComponent {
@Input() vista = {
  nombre: '',
  titulo: ''
}
  constructor() {}
}
