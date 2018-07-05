export class Ubicacion {
  private _pais: number;
  private _region: number;
  private _comuna: number;
  private _ciudadProvincia: number;
  private _calle: string;
  private _casaDpto: string;
  private _codigoPostal: string;

  get pais(): number {
    return this._pais;
  }

  set pais(value: number) {
    this._pais = value;
  }

  get region(): number {
    return this._region;
  }

  set region(value: number) {
    this._region = value;
  }

  get comuna(): number {
    return this._comuna;
  }

  set comuna(value: number) {
    this._comuna = value;
  }

  get ciudadProvincia(): number {
    return this._ciudadProvincia;
  }

  set ciudadProvincia(value: number) {
    this._ciudadProvincia = value;
  }

  get calle(): string {
    return this._calle;
  }

  set calle(value: string) {
    this._calle = value;
  }

  get casaDpto(): string {
    return this._casaDpto;
  }

  set casaDpto(value: string) {
    this._casaDpto = value;
  }

  get codigoPostal(): string {
    return this._codigoPostal;
  }

  set codigoPostal(value: string) {
    this._codigoPostal = value;
  }
}
