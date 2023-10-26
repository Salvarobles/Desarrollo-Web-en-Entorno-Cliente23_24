export function Cita() {
    const tiempo = Date.now();
    this._fecha = tiempo.getDate();
    this._hora = tiempo.getHours();

    Object.defineProperty(this, 'fecha', {
        get: function () {
            return this._fecha;
        },
    });

    Object.defineProperty(this, 'hora', {
        get: function () {
            return this._hora;
        },
    });
}

function CitaMedica(paciente, edad, fecha, hora) {
    CitaMedica.call(this, fecha, hora);
    this._paciente = paciente;
    this._edad = edad;
    
    Object.defineProperty(this, 'paciente', {
        get: function () {
            return this._paciente;
        },

        set: function (value) {
            this._paciente = value;
        }
    });

    Object.defineProperty(this, 'edad', {
        get: function () {
            return this._edad;
        },

        set: function (value) {
            this._edad = value;
        }
    });
}

CitaMedica.prototype.obtenerInfoCita = function () {
    alert(`El ${this._paciente} tiene cita a las ${this._hora} del ${this.fecha}`);
};

CitaMedica.prototype = Object.create(Cita.prototype);
CitaMedica.prototype.constructor = CitaMedica;