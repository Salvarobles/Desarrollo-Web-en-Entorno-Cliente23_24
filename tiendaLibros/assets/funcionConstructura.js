/**
 * @description Creando un objeto de usuario.
 * @author Salvador Robles Gómez
 */

export function LibroFuncional(titulo, autor, precio) {
  this._titulo = titulo;
  this._autor = autor;
  this._precio = precio;

  //Getter y setter para el nombre

  Object.defineProperty(this, "titulo", {
    get: function () {
      return this._titulo;
    },
    set: function (nuevoTitulo) {
      this._titulo = nuevoTitulo;
    },
  });

  Object.defineProperty(this, "autor", {
    get: function () {
      return this._autor;
    },
    set: function (nuevoAutor) {
      this._autor = nuevoAutor;
    },
  });

  Object.defineProperty(this, "precio", {
    get: function () {
      return this._precio;
    },
    set: function (nuevoPrecio) {
      this._precio = nuevoPrecio;
    },
  });
}

LibroFuncional.prototype.mostrarLibroAgregado = function () {
  alert(
    `El Libro ${this._titulo} del autor ${this._autor} ha sido insertado correctamente`
  );
};

LibroFuncional.prototype.mostrarLibroEliminado = function () {
  alert(
    `El Libro${this._titulo} del autor ${this._autor} ha sido eliminado correctamente`
  );
};
