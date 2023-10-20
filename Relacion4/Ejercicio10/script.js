/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome un objeto como argumento. Debería devolver un objeto con todas las
 * propiedades del objeto original. excepto la propiedad con clave 'b'
 */

const obj = {
    nombre: "Salvador",
    b: "Robles",
    edad: 25,
    sexo: "M",
}


function copiaObj(obj){
    const objC = {};

    for(let i in obj){
        if(i != "b"){
            objC[i] = obj[i];
        }
    }
    return objC;
}

console.log(copiaObj(obj));