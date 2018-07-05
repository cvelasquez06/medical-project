import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private mensaje = new BehaviorSubject<Object>({});
  mensajeGenerador = this.mensaje.asObservable();

  constructor() {}

  cargarMensaje(msgObject) {
    this.mensaje.next(msgObject);
  }
}
