import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ClienteListadoComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    $('#tableListadoClientes').DataTable();
  }
}
