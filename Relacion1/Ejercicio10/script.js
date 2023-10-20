/**
 * @author Salvador Robles Gómez
 * @description Escribe una función llamada dividirFragmento que tome un array arr y un número entero 
 * tamano . La función debe dividir el array en fragmentos de tamaño tamano 
 * y devolver un nuevo array con los Fragmentos.
 */

const arr1 = [1, 2, 3, 4, 5, 6];

const num = 3;

const dividirFragmento = (arr1, num) => arr1.splice(0, num);

console.log(dividirFragmento(arr1, num));
