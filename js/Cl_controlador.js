import Cl_vCine from "./Cl_vCine.js";
import Cl_vFamilia from "./Cl_vFamilia.js";
import Cl_mCine from "./Cl_mCine.js";
import Cl_mFamilia from "./Cl_mFamilia.js";
export default class Cl_controlador {
  constructor() {
    this.mCine = new Cl_mCine();
    this.vFamilia = new Cl_vFamilia(this);
    this.vCine = new Cl_vCine(this);
  }
  mostrarVistaFamilia() {
    this.vCine.ocultar();
    this.vFamilia.mostrar();
  }
  mostrarVistaCine() {
    this.vFamilia.ocultar();
    this.vCine.mostrar();
  }

  agregarInicial(inicial) {
    this.mCine.montoInicial = +inicial;
  }

  agregarFamilia({ nombre, personas, dia}) {
    let familia = new Cl_mFamilia({ nombre, personas, dia});
    this.mCine.procesarFamilias(familia);
    this.vCine.reportarFamilia({
      nombre: familia.nombre,
      personas: familia.personas,
      dia: familia.dia,
      montoPagar: familia.montoPagar(),
      familiaPagoMas: this.mCine.nombreFamiliaMayor(),
      promedioLunes: this.mCine.promedioLunes(),
      totalIngresos: this.mCine.ingresoTotal(),
    });
    this.mostrarVistaCine();
  }
}