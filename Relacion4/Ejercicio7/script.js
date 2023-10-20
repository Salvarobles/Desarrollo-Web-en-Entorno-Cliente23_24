/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome un objeto (a) como argumento. Devuelve una matriz con todas las
 * claves de los objetos.
 */

const obj = {
    nombre: "Salvador",
    apellido: "Robles",
    edad: 25,
    sexo: "M",
}

function devolverMatriz(a){
    const matriz = [];
    for(let i in a){
        matriz.push(i);
    }
    return matriz;
}

console.log(devolverMatriz(obj));