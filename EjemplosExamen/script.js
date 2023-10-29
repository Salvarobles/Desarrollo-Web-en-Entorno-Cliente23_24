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
//Para la estructura del local storage.
const KEY = "CitasStruct";
let arrayCita = [];

//------------------- FUNCTIONS ----------------
/**
 * Funcion para insertar nuestra array en el local storage.
 * @param {string} key
 * @param {array} structure
 */
function insertCitasStruct(key, structure) {
  localStorage.setItem(key, JSON.stringify(structure));
}
/**
 * Funcion para cargar la estructura del local storage.
 * @param {string} key
 */
function loadStruct(key) {
  return JSON.parse(localStorage.getItem(key));
}

function handlerAgregarCita(e) {
  e.preventDefault();
  //Cargamos la array a un tmpArray.
  const tmpArray = loadStruct(KEY);

  //Obtenemos los valores del fFormulario
  const userName = document.getElementById("nombreApellido").value;
  const dni = document.getElementById("dni").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  //Creamos el objeto cita.
  const cita = Object.create(citaMedica);
  cita.crearCita(dni, userName, fecha, hora);

  //Comprobamos si ese DNI ya existe en las tmpArray.
  let existe = false;

  for (let key of tmpArray) {  
    if (Object.keys(key).includes(cita._dni)) {
      existe = true;
    }
  } 
  if (existe) {
    alert("Ya existe una cita con ese dni");
    return false;
  }

  //Comprobamos si ese nombre ya existe en las citas.
  // let existeNombre = false;

  // for (let obj of tmpArray) { 
    // // Object.values(...Object.values(obj));
    // // Object.values(obj[0])
  //   console.log(...Object.values(obj));
  //   if (Object.values(...Object.values(obj)).includes(cita._paciente)) {
  //     existeNombre = true;
  //   }
  // }

  // if (existeNombre) {
  //   alert("Ya existe una cita con ese nombre");
  //   return false;
  // }

  //Agregamos nuestra cita a nuestra array.
  tmpArray.push(Object.fromEntries(cita.obtenerInfoCita()));

  insertCitasStruct(KEY, tmpArray);

  document.getElementById("nombreApellido").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("hora").value = "";
}

function handlerEliminarCita(e) {
  e.preventDefault();
  const dni = document.getElementById("dni").value;
  const tmpArray = loadStruct(KEY);

  let existe = false;
  for (const key of tmpArray){
    
    if(Object.keys(key).includes(dni)){
      alert(`Eliminando cita...`)
      console.log(tmpArray[key]);
      delete key[dni];
      existe = true;
    }
  }

  if (!existe){
    alert("La cita no se puede eliminar. No existe.");
    existe = false;
  }

  insertCitasStruct(KEY, tmpArray);
  
}

function loadTextArea(e){
  e.preventDefault();
  const tmpArray = loadStruct(KEY);

  const text = document.getElementById("citasTextarea");
  text.value = "";
  for(const obj of tmpArray){
    const propiedades = Object.values(...Object.values(obj));
      text.value += `\n La cita: ${Object.keys(obj)} es de ${propiedades[0]}`
  }

}
function init() {
  !localStorage.hasOwnProperty("CitasStruct") &&
    insertCitasStruct(KEY, arrayCita);

  document
    .getElementById("agregar")
    .addEventListener("click", handlerAgregarCita);

    document.getElementById("eliminar").addEventListener("click", handlerEliminarCita);
    document.getElementById("cargarCitas").addEventListener("click", loadTextArea);
}
//------------------- INICIALIZATION ----------------
document.addEventListener("DOMContentLoaded", init);
// insertCitasStruct(KEY, arrayCita);
// loadStruct(KEY);

// const cita1 = Object.create(citaMedica);
// const cita2 = Object.create(citaMedica);

// cita1.crearCita("77962939T", "Salvador Robles Gómez", "12/12/2023", "18:00:00")

// cita2.crearCita("77838392T", "Joseee", "12/12/2023", "18:00:00")

// arrayCita.push(Object.fromEntries(cita1.obtenerInfoCita()));
// arrayCita.push(Object.fromEntries(cita2.obtenerInfoCita()));
// insertCitasStruct(KEY, arrayCita);
