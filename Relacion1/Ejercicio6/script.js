/**
 * @author Salvador Robles Gómez
 * @description Crea una función llamada ordenarNumeros que tome un array de números arr y lo ordene de
 * menor a mayor.
 */

arr = [3, 1, 3, 5, 8, 6]

function ordenarNumeros(arr) {
    //y lo ordene de menor a mayor.
    return arr.sort();
}

const ordenarNumeros2 = (arr) => arr.sort((a, b) => a - b);

console.log(ordenarNumeros2(arr));