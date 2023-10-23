/**
 * @autor Salvador Robles Gómez
 * @description Escribe una función llamada rotarArray que rote los elementos de un array hacia la derecha
 * o izquierda. La función debe tomar un array arr y un número entero pasos que indique
 * cuántos pasos se deben realizar hacia la derecha (si es positivo) o hacia la izquierda (si es
 * negativo).
 */

const arr = [1,2,3,4,5,6,7,8,9,10];

const pasos = 4;

/**
 * Esta funcion muestra una array obtenida a partir de la rotacion de los pasos.
 * @param {Array} arr 
 * @param {number} pasos 
 * @returns Delvuelve una array. 
 */
function rotarArray(arr, pasos) {

    let element = null;

    if (pasos <= 0) {
        element = arr.splice(pasos, arr.length);
        arr.unshift(element);
    } else {
        element = arr.splice(0, pasos);
        arr.push(element);
    }

    return arr.flat();
}

console.log(rotarArray(arr, pasos));


