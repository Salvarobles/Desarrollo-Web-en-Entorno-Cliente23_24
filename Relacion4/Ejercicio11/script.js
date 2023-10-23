/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome dos objetos como argumentos. Lamentablemente, la propiedad 'b' del
 * segundo objeto tiene la clave incorrecta. En su lugar, debería llamarse 'd'. Fusione ambos objetos y
 * corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. Debe tener las propiedades
 * 'a', 'b', 'c', 'd' y 'e'.
 */

const obj1 = {
    a : 1,
    b : 2,
    c : 3,
}

const obj2 = {
    a : 4,
    d : 1,
    c : 6,
    d : 4,
    e : 5,
}
/**
 * Funcion que fusiona dos objetos y lo devuelve uno solo. 
 * @param {object} obj1 
 * @param {object} obj2 
 * @returns Devuelve un objeto.
 */
function fusionar(obj1, obj2){
 
    const obj3 = {};

    for(let i in obj1){
        obj3[i] = obj1[i];
    }
    for(let i in obj2){
        obj3[i] = obj2[i];
    }
    return obj3;
}

console.log(fusionar(obj1, obj2));
