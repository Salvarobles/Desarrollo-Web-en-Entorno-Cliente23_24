/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores
 * (temperaturas) del objeto. Vamos a imaginar que el objecto tiene por claves meses del año y los
 * valores de esas claves son temperaturas. Es necesario validar que los valores de las claves son
 * números para realizar la suma.
 */

const a = {
    enero : 34,
    febrero : 35,
    marzo : 36,
    abril : 37,
    mayo : 38,
    junio : 39,
}

function sumaTemperaturas(a){
    let total = 0;
    for(let i in a){
        if(typeof a[i] === "number"){
            total += a[i];
        } else {
            return undefined;
        }
    }
    return total;
}

console.log(sumaTemperaturas(a));
