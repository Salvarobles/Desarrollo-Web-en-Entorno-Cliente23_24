/**
 * @author Salvador Robles Gómez
 * @description Escribe una función llamada eliminarElemento que tome un array arr y un elemento
 *, y elimine la primera aparición de ese elemento en el array.
 */

arr1 = [1, 2, 3, 1, 2, 3, 4];

element = 4;

function eliminarElemento(arr, elemento) {
  let index = arr.indexOf(elemento);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

const eliminarEliminar2 = (arr, elemento) => arr.splice(arr.indexOf(elemento), arr);

console.log(eliminarElemento(arr1, element));


