/**
 * @author Salvador Robles Gómez
 * @description En una clinica memdica se necita gestionar las citas de los pcientes, debes de crear una estructura de funcion proottipos de ....
 * atributos, pacientes, fecha y hora
 * metodos, obtenerinformacionCita, crear la cita, objetos literales, constructors funciones, y clases
 * NOta: los ejericcio deben mostrar herencia, getter, setter, ademas los objetos creados se crearan en una array con un map en su persectencia
 */

//------------------- IMPORTS ----------------
import { cita } from "./assets/citaLiteral.js";

//------------------- VARIABLES ----------------
const KEY = "CitasStruct";
let arrayCita = [];
//------------------- FUNCTIONS ----------------

function insertCitasStruct(key, structure){
    localStorage.setItem(key, JSON.stringify(structure));
}

function loadStruct(key){
    JSON.parse
}
//------------------- INICIALIZATION ----------------