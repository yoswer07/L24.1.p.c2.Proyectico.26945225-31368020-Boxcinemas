export default class Cl_vCine {
  constructor(controlador) {
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.btAgregar = document.getElementById("mainForm_btAgregar");
    this.lblFamiliaPagoMas = document.getElementById("mainForm_lblFamiliaPagoMas");
    this.lblPromedioLunes = document.getElementById("mainForm_lblPromedioLunes");
    this.lblTotalIngresos = document.getElementById("mainForm_lblTotalIngresos");
    let dineroInicial = prompt("Por favor agrega el monto inicial de caja");

    this.btAgregar.onclick = () => controlador.mostrarVistaFamilia();
    controlador.agregarInicial(dineroInicial);
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }

  reportarFamilia({
    nombre,
    personas,
    dia,
    montoPagar,
    familiaPagoMas,
    promedioLunes,
    totalIngresos
  }) {
    this.tabla.innerHTML += `
    <tr>
      <td>${nombre}</td>
      <td>${personas}</td>
      <td>${dia}</td>
      <td>${montoPagar}</td>
    </tr>`;
    this.lblFamiliaPagoMas.innerHTML = familiaPagoMas;
    this.lblPromedioLunes.innerHTML = promedioLunes;
    this.lblTotalIngresos.innerHTML = totalIngresos;
  }
}
