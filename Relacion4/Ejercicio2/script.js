/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
 * el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario.
 */
const a = {
    nombre : "Salvador",
    edad : 33,
    cp : 10000,
}

const b = "cp";

function comprobarB(a, b) { 
    if (a.hasOwnProperty(b)) {
        return true;
    } else {
        return false;
    }
}