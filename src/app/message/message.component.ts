import {Component, OnInit} from '@angular/core';
import {MessageService} from '../service/message.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  titleMessage: string;
  typeMessage: string = 'success';
  bodyMessage: string;
  footerMessage: string;

  mensaje: any = {};
  constructor(private mensajeService: MessageService) {}

  ngOnInit() {
    this.mensajeService.mensajeGenerador.subscribe(mensaje => this.mensaje = mensaje);
  }
}
