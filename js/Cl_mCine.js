export default class Cl_mCine {
  constructor() {
    this.acumTotalIngresos = 0;
    this.mayor = 0;
    this.familiaMayor = '';
    this.contLunes = 0;
    this.acumTotalLunes = 0;
    this.montoInicial = 0;
  }
  procesarFamilias(familia) {
    this.acumTotalIngresos += familia.montoPagar();
    if(familia.montoPagar() > this.mayor) {
      this.mayor = familia.montoPagar();
      this.familiaMayor = familia.nombre;
    }
    if (familia.dia === 1) {
      this.contLunes++;
      this.acumTotalLunes += familia.montoPagar();
    }
  }
  ingresoTotal() {
    return this.acumTotalIngresos + this.montoInicial;
  }
  nombreFamiliaMayor() {
    return this.familiaMayor;
  }
  promedioLunes() {
    return this.acumTotalLunes / this.contLunes;
  }
}
