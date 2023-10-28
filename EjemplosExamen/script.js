/**
 * @author Salvador Robles Gómez
 * @description En una clinica memdica se necita gestionar las citas de los pcientes, debes de crear una estructura de funcion proottipos de ....
 * atributos, pacientes, fecha y hora
 * metodos, obtenerinformacionCita, crear la cita, objetos literales, constructors funciones, y clases
 * NOta: los ejericcio deben mostrar herencia, getter, setter, ademas los objetos creados se crearan en una array con un map en su persectencia
 */

//------------------- IMPORTS ----------------
import { citaMedica } from "./assets/citaLiteral.js";

//------------------- VARIABLES ----------------
const KEY = "CitasStruct";
let arrayCita = [];
//------------------- FUNCTIONS ----------------

function insertCitasStruct(key, structure) {
  localStorage.setItem(key, JSON.stringify(structure));
}

function loadStruct(key) {
  JSON.parse(localStorage.getItem(key));
}


//------------------- INICIALIZATION ----------------

insertCitasStruct(KEY, arrayCita);
loadStruct(KEY);

const cita1 = Object.create(citaMedica);
const cita2 = Object.create(citaMedica);

cita1.crearCita("77962939T", "Salvador Robles Gómez", "12/12/2023", "18:00:00")

cita2.crearCita("77838392T", "Joseee", "12/12/2023", "18:00:00")

arrayCita.push(Object.fromEntries(cita1.obtenerInfoCita()));
arrayCita.push(Object.fromEntries(cita2.obtenerInfoCita()));
insertCitasStruct(KEY, arrayCita);