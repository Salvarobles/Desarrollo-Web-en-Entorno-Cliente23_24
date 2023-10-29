/**
 * Clase Literal padre.
 */
const cita = {

  _fecha: "",
  _hora: "",

  get fecha() {
    return this._fecha;
  },

  get hora() {
    return this._hora;
  },
};

/**
 * Clase hija y la exportamos.
 */
export const citaMedica = Object.create(cita);

Object.assign(citaMedica, {
  _dni: "",
  _paciente: "",

  crearCita(dni, paciente, fecha, hora) {
    this._dni = dni;
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

Object.defineProperty(citaMedica, "dni", {
  get dni() {
    return this._dni;
  },

  set dni(value) {
    this._dni = value;
  },
});

Object.defineProperty(citaMedica, "paciente", {
  get paciente() {
    return this._paciente;
  },

  set paciente(value) {
    this._paciente = value;
  },
});

