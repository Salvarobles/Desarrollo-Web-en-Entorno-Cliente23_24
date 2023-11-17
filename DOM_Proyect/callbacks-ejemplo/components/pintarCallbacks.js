/**
 * @param {HTMLDivElement} elemnt
 */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const pintarCallbacks = (element) => {
//   realizarOperacion(3, 4, (suma) => {
//     element.innerHTML = suma;
//   });
    filtrarParesAsinc(array, (numeros) => {
        element.innerHTML = numeros });

//   validarUsuario("salva", mensajeUsuario);
};

function realizarOperacion(num1, num2, callback) {
  setTimeout(() => {
    const suma = num1 + num2;
    callback(suma);
  }, 2000);
}

function imprimirSumaCallbacks(suma) {
  console.log(suma);
  return suma;
}

//------------- Ejercicio 2 ------------------------------



function filtrarParesAsinc(array, callback) {
  setTimeout(() => {
    const numPares = array.filter((array) => array % 2 === 0);
    callback(numPares);
  }, 300);
}

//---------- Ejercicio 4 ----------------

// function validarUsuario(name, callback) {
//   const array = [salva];
//   setTimeout(() => {
//     const validar = array.some(name);
//     callback(validar);
//   });
// }

// function mensajeUsuario(validar) {
//   return validar
//     ? console.log("Bienvenido Usuario")
//     : console.log("Usuario Existente");
// }

export default pintarCallbacks;
