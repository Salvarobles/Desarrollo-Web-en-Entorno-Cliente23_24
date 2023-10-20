/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
 * el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras,
 * no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.
 */

const a = { 
    nombre : "Salvador",
    edad : 33,
    cp : 1000,
}

const b = "cp";


function comprobar(a, b) { 
    if (a.hasOwnProperty(b) && a[b]) {
        return true;
    } else {
        return false;
    }
}

//Arrow Fuction
const comprobar2 = (a, b) => a.hasOwnProperty(b) && a[b] ? true : false;

console.log(comprobar(a, b));

console.log(comprobar2(a, b));