/**
 * @author Salvador Robles Gómez
 * @description Crea una función llamada buscarElemento que tome un array arr y un elemento elemento . La
 * función debe devolver el índice de la primera aparición de elemento en el array, o -1 si no se
 * encuentra.
 */

function buscarElemento(arr, elemento) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            return i;
        }
    }
    return arr;

}

const buscarElemento2 = (arr, elemento) => arr.indexOf(elemento);

console.log(buscarElemento([1, 2, 3, 1, 2, 3], 1));