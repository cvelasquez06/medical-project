import {Ubicacion} from '../../ubicacion/clase/ubicacion';

export class Auxiliar{
  private _id: number;
  private _identificadorEstatal: string;
  private _razonSocial: string;
  private _nombre: string;
  private _ubicacion: Ubicacion;
  private _giro: number;
  private _descripcion: string;

  public constructor(){
    this._ubicacion = new Ubicacion();
  }

  get ubicacion(): Ubicacion {
    return this._ubicacion;
  }

  set ubicacion(value: Ubicacion) {
    this._ubicacion = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get identificadorEstatal(): string {
    return this._identificadorEstatal;
  }

  set identificadorEstatal(value: string) {
    this._identificadorEstatal = value;
  }

  get razonSocial(): string {
    return this._razonSocial;
  }

  set razonSocial(value: string) {
    this._razonSocial = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get giro(): number {
    return this._giro;
  }

  set giro(value: number) {
    this._giro = value;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(value: string) {
    this._descripcion = value;
  }
}
