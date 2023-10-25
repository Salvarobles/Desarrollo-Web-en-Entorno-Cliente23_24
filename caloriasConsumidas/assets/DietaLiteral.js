/**
 * Objeto litral para la dieta.
 */
const Dieta = {
  _alimentosConsumidos: [],

  agregarAlimento(Comida) {
    if (typeof Comida === "object") {
      if (!this._alimentosConsumidos.includes(Comida)) {
        this._alimentosConsumidos.push(Comida);
      } else {
        alert("El alimento ya se encuentra en la lista");
      }
    } else {
      alert("El tipo de alimento debe ser un objeto");
    }
  },

  calcularCalorias() {
    const suma = [];
    this._alimentosConsumidos.map(acum, comida => {
        suma.push(comida.caloria), acum;
    });
  }

  

};
