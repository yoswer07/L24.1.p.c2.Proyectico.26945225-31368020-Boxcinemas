export default class Cl_mFamilia {
  constructor({ nombre, personas, dia}) {
    this.nombre = nombre;
    this.personas = personas;
    this.dia = dia;
  }
  set nombre(n) {
    this._nombre = n;
  }
  get nombre() {
    return this._nombre;
  }
  set personas(p) {
    this._personas = +p;
  }
  get personas() {
    return this._personas;
  }
  set dia(d) {
    this._dia = +d;
  }
  get dia() {
    return this._dia;
  }
  montoPagar() {
    if (this.dia === 1) return this.personas * 1.5;
    else return this.personas * 3;
  }
}