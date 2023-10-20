/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una
 * propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.
 */


const a = "nombre";
const b = "Salvador";


function crearObjeto(a,b){
    const obj = {};
    obj[a] = b;

    return obj;
}

console.log(crearObjeto(a,b));