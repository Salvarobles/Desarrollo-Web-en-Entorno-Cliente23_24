/**
 * @description Creando un objeto usando Clases.
 * @author Salvador Robles Gómez.
 */
export class LibroClass {
  constructor(titulo = "", autor = "", precio = 0) {
    this._titulo = titulo;
    this._autor = autor;
    this._precio = precio;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }

  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }

  get precio() {
    return this._precio;
  }

  set precio(nuevoPrecio) {
    this._precio = nuevoPrecio;
  }

  mostrarLibroAgregado() {
    alert(
      `El Libro ${this._titulo} del autor ${this._autor} ha sido insertado correctamente`
    );
  }

  mostrarLibroEliminado() {
    alert(
      `El Libro ${this._titulo} del autor ${this._autor} ha sido eliminado correctamente`
    );
  }
}
