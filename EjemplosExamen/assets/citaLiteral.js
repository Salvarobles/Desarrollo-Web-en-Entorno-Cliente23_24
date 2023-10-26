const cita = {
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

export const citaMedica = Object.create(cita);

Object.assign(citaMedica, {
  _dni: "",
  _paciente: "",

  get dni() {
    return this._dni;
  },

  set dni(value) {
    this._dni = value;
  },

  get paciente() {
    return this._paciente;
  },

  set paciente(value) {
    this._paciente = value;
  },

  crearCita(dni, paciente, fecha, hora) {
    this._dni = dni ;
    this._paciente = paciente;
    this._fecha = fecha;
    this._hora = hora;
  },

  obtenerInfoCita() {
    const myMap = new Map();
    myMap.set(this._dni, {
      paciente: this._paciente,
      fecha: this._fecha,
      hora: this._hora,
    });
    return myMap;
  },
});
