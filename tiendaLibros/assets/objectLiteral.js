/**
 * @description Creando un objeto literal.
 * @author Salvador Robles Gómez
 */

export const libro = {
  _titulo: "",
  _autor: "",
  _precio: 0,

  get titulo() {
    return this._titulo;
  },

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  },

  get autor() {
    return this._autor;
  },

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  },

  get precio() {
    return this._precio;
  },

  set precio(nuevoPrecio) {
    this._precio = nuevoPrecio;
  },

  mostrarLibroAgregado() {
    alert(
      `El Libro ${this._titulo} del autor ${this._autor} ha sido insertado correctamente`
    );
  },

  mostrarLibroEliminado() {
    alert(
      `El Libro ${this._titulo} del autor ${this._autor} ha sido eliminado correctamente`
    );
  },
};
