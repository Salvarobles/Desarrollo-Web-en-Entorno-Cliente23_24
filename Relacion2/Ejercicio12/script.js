/**
 * @author Salvador Robles Gómez
 * @description Escribe una función llamada combinarObjetos que tome dos objetos (tanto arrays como
 * objetos) obj1 y obj2 . La función debe combinar ambos objetos en uno solo y devolverlo.
 **/

let obj1 = { a: "Hola" };
let obj2 = { b: "Soy Salva" };


const combinarObjetos2 = (obj1, obj2) => new Object(`${obj1.a}, ${obj2.b}`);
console.log(combinarObjetos2(obj1, obj2));
/**
 * 
 * @param {*} obj1 
 * @param {*} obj2 
 * @returns 
 */
function combinarObjetos(obj1, obj2) {
    let obj3 = {};
    for (let key in obj1) {
        obj3[key] = obj1[key];
    }
    for (let key in obj2) {
        obj3[key] = obj2[key];
    }
    return obj3;
}

// console.log(combinarObjetos(obj1, obj2));
