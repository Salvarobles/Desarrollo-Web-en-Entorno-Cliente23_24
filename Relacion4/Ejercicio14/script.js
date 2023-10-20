/**
 * @author Salvador Robles Gómez
 * @description Reemplazar cadenas vacías en el objeto con valores nulos. Escriba una función que tome un objeto
 * como argumento.Algunos de los valores de propiedad contienen cadenas vacías. Reemplace cadenas
 * vacías y cadenas que contienen solo espacios en blanco con valores nulos. Devuelva el objeto
 * resultante.
 */

const obj = {
    nombre : "",
    apellido : "",
    edad: "" ,
    sexo: 'Hombre',
    hobbies: ['Programar', 'Leer', 'Escuchar', 'Caminar']
}

function cadenasVacias(objeto) {
    const objNew = {};
    for (let key in objeto) {
        if (objeto[key] === "") {
            objNew[key] = null;
        } else {
            objNew[key] = objeto[key];
        }
    }
    return objNew;
}

console.log(cadenasVacias(obj));