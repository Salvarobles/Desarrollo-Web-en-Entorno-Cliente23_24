export class Cita {
  constructor() {}
  tiempo = Date.now();

  _fecha = tiempo.getDate();
  _hora = tiempo.getHours();

  get fecha() {
    return this._fecha;
  }

  get hora() {
    return this._hora;
  }
}

class CitaMedica extends Cita {
  constructor(paciente, edad, fecha, hora) {
    super(fecha, hora);
    this.paciente = paciente;
    this._edad = edad;
  }

  get paciente() {
    return this._paciente;
  }
  set paciente(value) {
    this._paciente = value;
  }

  get edad() {
    return this._edad;
  }
  set edad(value) {
    this._edad = value;
  }

  obtenerInfoCita() {
    alert(
      `El ${this._paciente} tiene cita a las ${this._hora} del ${this.fecha}`
    );
  }
}
