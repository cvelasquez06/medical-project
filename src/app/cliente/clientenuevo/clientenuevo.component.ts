import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validator} from '@angular/forms';
import {Cliente} from '../clase/cliente';

@Component({
  selector: 'app-clientenuevo',
  templateUrl: './clientenuevo.component.html',
  styleUrls: ['./clientenuevo.component.css']
})
export class ClientenuevoComponent implements OnInit {

  fCrearCliente: FormGroup;
  cliente: Cliente;
  loading: boolean = false;


  constructor() {
    this.fCrearCliente = new FormGroup({
      numeroparte: new FormControl(),
      descripcion: new FormControl(),
      fabricante: new FormControl(0),
      numeropartefabricante: new FormControl(),
      grupo: new FormControl(0),
      subgrupo: new FormControl(0),
      peso: new FormControl(),
      ancho: new FormControl(),
      alto: new FormControl(),
      largo: new FormControl(),
      talla: new FormControl(),
      color: new FormControl(0),
      disolucion: new FormControl(),
      capacidad: new FormControl(),
      envase: new FormControl(0),
      tapa: new FormControl(0),
      habilitado: new FormControl()
    });
  }

  ngOnInit() {
  }

}
