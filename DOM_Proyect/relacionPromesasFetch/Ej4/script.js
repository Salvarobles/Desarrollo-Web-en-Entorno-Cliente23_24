/**
 * @author Salvador Robles Gómez
 * @description Ejercicio 4:
 *  Crea una secuencia de tres funciones asíncronas de 1 segundo cada una(paso1, paso2, paso3)
 *  que deben ejecutarse en orden. La primera función crea una etiqueta spam, la segunda le cambia
 *  el color al texto de dicho spam y la tercera muestra un Hola mundo dentro de dicho spam.
 */

// VARIABLES

const contenedor = document.querySelector(".container");
contenedor.innerText = "0";

// FUNCIONES

/**
 * Crea una etiqueta span para el element, al cual se le cambia el texto a "1"
 * @param {HTMLElement} element Contenedor donde se insertará el elemento span
 * @returns {HTMLElement} elemento span
 */

const paso1 = (element) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const spam = document.createElement("span");
      spam.textContent = "Bienvenido";
      element.innerText = "1";
      resolve(spam);
    }, 1000);
  });
};

/**
 * Recibe un elemento span y le cambia el color de texto a rojo. Cambia el texto del contenedor a "1"
 * @param {HTMLElement} element Elemento al que se le cambiará el color
 * @returns {HTMLElement} Elemento con el color cambiado
 */

const paso2 = (element) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.style.color = "red";
      contenedor.childNodes[0].nodeValue = "2";
      resolve(element);
    }, 1000);
  });
};

/**
 * Recibe un elemento span y le cambia el texto a "Hola mundo". Cambia el texto del contenedor a "3"
 * @param {HTMLElement} element Elemento al que se le cambiará el texto
 * @returns {HTMLElement} Elemento con el texto cambiado
 */

const paso3 = (element) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.innerText = "Hola mundo";
      contenedor.childNodes[0].nodeValue = "3";
      resolve(element);
    }, 1000);
  });
};

/**
 * Ejecuta los tres pasos anteriores en el contenedor `element`
 * @param {HTMLElement} element Contenedor donde ocurriran los cambios
 */
function secuencia(element) {
  paso1(element)
    .then((result1) => {
      contenedor.appendChild(result1);
      return paso2(result1);
    })
    .then((result2) => {
      contenedor.querySelector("span").remove();
      contenedor.appendChild(result2);
      return paso3(result2);
    })
    .then((result3) => {
      contenedor.querySelector("span").remove();
      contenedor.appendChild(result3);
    })
    .catch((err) => console.log("Hubo error:" + err));
}

function init() {
  secuencia(contenedor);
}

document.addEventListener("DOMContentLoaded", init);