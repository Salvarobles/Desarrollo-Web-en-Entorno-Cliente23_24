/**
 * @author Salvador Robles Gómez
 * @description Escribe una función llamada rangoNumeros que tome dos números inicio y fin . La
 * función debe devolver un array que contenga todos los números en el rango desde inicio
 * hasta fin , incluyendo ambos números.
 **/

let inicio = 5;
let fin = 10;


function rangoNumeros (incio, fin) {

    let numeros = [];
    for (let numero = incio; numero <= fin; numero++) {
        numeros.push(numero);
    }
    return numeros;
}

console.log(rangoNumeros(inicio, fin));