export default class Cl_vFamilia {
  constructor(controlador) {
    this.vista = document.getElementById("familiaForm");
    this.inNombre = document.getElementById("familiaForm_inNombre");
    this.inPersonas = document.getElementById("familiaForm_inPersonas");
    this.inDia = document.getElementById("familiaForm_inDia");
    this.btAceptar = document.getElementById("familiaForm_btAceptar");
    this.btAceptar.onclick = () =>
      controlador.agregarFamilia({
        nombre: this.inNombre.value,
        personas: this.inPersonas.value,
        dia: this.inDia.value,
      });
    this.ocultar();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
}