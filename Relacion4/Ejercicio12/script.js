/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome un objeto (a) y un número (b) como argumentos. Multiplica todos los 
 * valores de 'a' por 'b'. Devuelve el objeto resultante. Comprobar que los valores de las claves de (a) son
 * números para realizar la multiplicación.
 */

const a = {
    a : 1,
    b : 2,
    c : null,
}

const b = 2;

function multiplicar(a, b){
    const obj = {};
    for (let i in a){
        if(typeof a[i] === "number"){
            obj[i] = a[i] * b;
        } else {
            return "Debe de ser un numero";
        }
    }
    return obj;
}

console.log(multiplicar(a, b));