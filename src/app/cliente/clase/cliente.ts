import {Auxiliar} from '../../auxiliar/clase/auxiliar';

export class Cliente extends Auxiliar {
  private _habilitado: boolean;

  get habilitado(): boolean {
    return this._habilitado;
  }

  set habilitado(value: boolean) {
    this._habilitado = value;
  }
}

