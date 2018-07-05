import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator} from '@angular/forms';
import {Producto} from '../clase/producto';
import {ProgressService} from '../../service/progress.service';
import {MessageService} from '../../service/message.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  fCrearProducto: FormGroup;
  producto: Producto;
  loading: Boolean = false;

  constructor(private progress: ProgressService,
              private mensaje: MessageService
  ) {
    this.fCrearProducto = new FormGroup({
      numeroparte: new FormControl('D027H3212000'),
      descripcion: new FormControl('suero fisiologico perfusión 9 mg/ml   '),
      fabricante: new FormControl(2),
      numeropartefabricante: new FormControl('BAXTER'),
      grupo: new FormControl(3),
      subgrupo: new FormControl(1),
      peso: new FormControl(0.1),
      ancho: new FormControl(3),
      alto: new FormControl(15),
      largo: new FormControl(20),
      talla: new FormControl(''),
      color: new FormControl(1),
      disolucion: new FormControl(0.9),
      capacidad: new FormControl(0.009),
      envase: new FormControl(1),
      tapa: new FormControl(1),
      imagen: new FormControl(''),
      habilitado: new FormControl(1)
    });
  }

  ngOnInit() {
    this.settingInputFile();
    this.progress.statusProgress.subscribe();
    this.mensaje.mensajeGenerador.subscribe();
  }

  private settingInputFile() {
    $('.custom-file-input').on('change', function() {
      var fileName = $(this).val().split('\\').pop();
      $(this).next('.custom-file-label').addClass('selected').html(fileName);
    });
    $('#habilitar').on('click', function() {
      $('#habilitado').click();
    });
  }

  public guardarProducto() {
    this.progress.cargarStatus(true);
    this.producto = new Object().constructor(this.fCrearProducto.value);

    setTimeout(function(loading, mensaje) {
      loading.cargarStatus(false);
      mensaje.cargarMensaje({show: true, title: 'Bienvenido'});


      setTimeout(function(msg) {
        msg.cargarMensaje({show: false});
      },5000, mensaje);

    },5000, this.progress, this.mensaje);

  }
}
