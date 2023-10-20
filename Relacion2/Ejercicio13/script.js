/**
 * @author Salvador Robles Gómez
 * @description Define una función llamada extraerPropiedades que tome un objeto obj y un array de
 * propiedades . La función debe devolver un nuevo objeto que contenga solo las propiedades
 * especificadas en el array. Si una propiedad no existe en el objeto original, debe ser omitida en
 * el nuevo objeto.
 **/

// function extraerPropiedades(obj, arr) {
//   let nuevoObj = {};
//   for (let a of arr) {
//     if (obj.hasOwnProperty(arr[i])) {
//       nuevoObj[arr[i]] = obj[arr[i]];
//     }
//   }
//   return nuevoObj;
// }

const arr = ["a", "b", "c", "d", "e"];
const obj = new Object();

const extraerPropiedades = (obj, arr) => arr.reduce((acum, obj) => obj[a] = obj[a], obj);

console.log(extraerPropiedades(obj, arr));