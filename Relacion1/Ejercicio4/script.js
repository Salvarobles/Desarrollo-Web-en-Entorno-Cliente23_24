/**
 * @author Salvador Robles Gómez 
 * @description Escribe una función llamada unirArrays que acepte un número variable de arrays y los combine
 * en uno solo. Nota: Se podría utilizar el método reduce y el método concat para lograrlo.
 */

/**
 * En esta funcion unirArrays devuelve todos los arrays unidos.
 * @param  array ...arr 
 * @returns
 */
function unirArrays(...arr){
    const resultado = [].concat(...arr);
    return resultado;
}


const unir = (...arr) => arr.concat(...arr);

const unir5 = (...arr) => [...arr].flat();

const unir3 = (dato,...arr) => dato.concat(...arr);

const unir4 = (...arr) => [].concat(...arr);

const unir2 = (...arr) => arr.reduce((acumulador, array) => acumulador.concat(array),[]);

//Ejemplo
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [6, 7, 8, 9, 10];
const arr4 = [6, 7, 8, 9, 10];


console.log(unirArrays(arr1, arr2, arr3, arr4));
