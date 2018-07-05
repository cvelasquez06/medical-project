
export class Producto {
  private _numeroparte: string;
  private _descripcion: string;
  private _fabricante: number;
  private _numeropartefabricante: string;
  private _grupo: number;
  private _subgrupo: number;
  private _peso: number;
  private _ancho: number;
  private _alto: number;
  private _largo: number;
  private _talla: number;
  private _color: number;
  private _disolucion: number;
  private _capacidad: number;
  private _envase: number;
  private _tapa: number;
  private _imagen: string;
  private _habilitado: boolean;

  get imagen(): string {
    return this._imagen;
  }

  set imagen(value: string) {
    this._imagen = value;
  }

  get numeroparte(): string {
    return this._numeroparte;
  }

  set numeroparte(value: string) {
    this._numeroparte = value;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(value: string) {
    this._descripcion = value;
  }

  get fabricante(): number {
    return this._fabricante;
  }

  set fabricante(value: number) {
    this._fabricante = value;
  }

  get numeropartefabricante(): string {
    return this._numeropartefabricante;
  }

  set numeropartefabricante(value: string) {
    this._numeropartefabricante = value;
  }

  get grupo(): number {
    return this._grupo;
  }

  set grupo(value: number) {
    this._grupo = value;
  }

  get subgrupo(): number {
    return this._subgrupo;
  }

  set subgrupo(value: number) {
    this._subgrupo = value;
  }

  get peso(): number {
    return this._peso;
  }

  set peso(value: number) {
    this._peso = value;
  }

  get ancho(): number {
    return this._ancho;
  }

  set ancho(value: number) {
    this._ancho = value;
  }

  get alto(): number {
    return this._alto;
  }

  set alto(value: number) {
    this._alto = value;
  }

  get largo(): number {
    return this._largo;
  }

  set largo(value: number) {
    this._largo = value;
  }

  get talla(): number {
    return this._talla;
  }

  set talla(value: number) {
    this._talla = value;
  }

  get color(): number {
    return this._color;
  }

  set color(value: number) {
    this._color = value;
  }

  get disolucion(): number {
    return this._disolucion;
  }

  set disolucion(value: number) {
    this._disolucion = value;
  }

  get capacidad(): number {
    return this._capacidad;
  }

  set capacidad(value: number) {
    this._capacidad = value;
  }

  get envase(): number {
    return this._envase;
  }

  set envase(value: number) {
    this._envase = value;
  }

  get tapa(): number {
    return this._tapa;
  }

  set tapa(value: number) {
    this._tapa = value;
  }

  get habilitado(): boolean {
    return this._habilitado;
  }

  set habilitado(value: boolean) {
    this._habilitado = value;
  }
}
