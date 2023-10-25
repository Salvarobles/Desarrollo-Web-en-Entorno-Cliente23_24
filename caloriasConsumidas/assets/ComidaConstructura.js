/**
 * Funcion contructura para las comidas.
 * @param {String} nombre Nombre del alimento. 
 * @param {number} caloria Numero de calorias del alimento. 
 */
function Comida(nombre, caloria) {
    _this.nombre = nombre;
    _this.caloria = caloria;

    //Getters y setters

    Object.defineProperty(this, nombre, {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        }
    })

    Object.defineProperty(this, caloria, {
        get: function () {
            return this._caloria;
        },
        set: function (value) {
            this._caloria = value;
        }
    })
}

Comida.prototype.calcularCalorias = function () {
    console.log(`Este alimento ${this.nombre} contiene ${this.caloria} calorias.`);
}

