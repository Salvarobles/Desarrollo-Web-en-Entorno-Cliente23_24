/**
 * @author Salvador Robles Gómez
 * @description Crea una aplicación web para calcular las calorías consumidas en una dieta.
 */

// ---------------- IMPORT ------------------------
import { Dieta as DietaLiteral } from "./assets/DietaLiteral.js";
import { Comida as ComidaConstructura } from "./assets/ComidaConstructura.js";

// ---------------- VARIABLES ------------------------
const comidasKey = "comidas";
const comidasArray = [];

const dietaKey = "dieta";
const dietaArray = [];

// ---------------- FUNCIONES ------------------------
/**
 * Funcion para añadir una structura al local storage.
 * @param {string} key Nombre de la clave de la estructura.
 * @param {array} structure Lista de objetos de la estructura.
 */
function insertAlimentsStructure(key, structure) {
  localStorage.setItem(key, JSON.stringify(structure));
}

function init() {
  !localStorage.getItem(comidasKey) &&
    insertAlimentsStructure(comidasKey, comidasArray);
  !localStorage.getItem(dietaKey) &&
    insertAlimentsStructure(dietaKey, dietaArray);
    
}
// ---------------- INICIALIZACION ------------------------
