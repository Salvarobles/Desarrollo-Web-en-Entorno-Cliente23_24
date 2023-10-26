export const cita = {
  tiempo: Date(),

  _fecha: "",
  _hora: "",

  get fecha() {
    return this.tiempo.getDate();
  },

  get hora() {
    return this.tiempo.getHours();
  },

};

const citaMedica = Object.create(cita);

Object.assign(citaMedica, {
  _paciente: "",

  get paciente() {
    return this._paciente;
  },

  set paciente(value) {
    this._paciente = value;
  },

  obtenerInfoCita() {
    return alert(
      `El ${this._paciente} tiene cita a las ${this._hora} del ${this.fecha}`
    );
  },

});




