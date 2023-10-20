/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga
 * propiedades con claves los elementos del array 'a' y con los valores correspondientes 'b'.
 * Devuelve el objeto.
 */

const a = [1,2,3];
const b = [4,5,6];

function crearObjeto(a,b){
    const obj = {};
    for(let i in a){
        obj[a[i]] = b[i];
    }

    return obj;
}

console.log(crearObjeto(a,b));
