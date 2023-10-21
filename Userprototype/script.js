/**
 * @description Crear un formulario en html que permita en JS
 * usando los campos:
 * nombre, edad y dni
 * insertar un objeto usando la estructura de herencia protopica con funciones y con Objetos
 * ¿Puedo ir guandandolos en un array de objetos?
 */

//------------------------Import ------------------------
import { usuario as Usuario } from "./assets/modules.js";
// import usuarioF from "./assets/modules.js";
//------------------------Variables Grobales ------------
const KEY = "arrayUsers";
const usuarios = [];
//------------------------ FUNCIONES ------------------------

function insertUsersStorage(key, structData) {
  return localStorage.setItem(key, JSON.stringify(structData));
}

function loadStruct(key) {
  return JSON.parse(localStorage.getItem(key));
}

function handlerInsertUsuario(e) {
  e.preventDefault();// <-- Impide que se recarga la pagina
  const formualrioUsuario = document.getElementById("formularioUsuario");
  const usernameFrm = document.getElementById("username").value;
  const edadFrm = document.getElementById("edad").value;
  const dniFrm = document.getElementById("dni").value;

  //Mensaje de error o existo

  const mensajeExito = document.getElementById("mensajeExito");
  const mensajeError = document.getElementById("mensajeEError");

  const saludar = "holaaaa";


  //Creamos un objeto basado en el prototipo de usuario
  let newUser = Object.create(Usuario);
  newUser.nombre = usernameFrm;
  newUser.edad = edadFrm;
  newUser.dni = dniFrm;

  const tmpArray = loadStruct(KEY);
  const encontrado = tmpArray.some((objeto) => objeto._dni === newUser._dni);
  
  if (encontrado) {
    alert(`Usuario ${newUser._nombre} es existente`);
    // mensajeError.style.display = "block";

    // setTimeout(function() {
    //   mensajeError.style.display = "none";
    // }, 5000);
    return false;
  }


  if (newUser.validarDni()) {
    newUser.mostrarInfo();
  } else {
    alert(`El dni ${newUser._dni} es incorrecto`);
    return false;
  }

  tmpArray.push(newUser); 
  insertUsersStorage(KEY, tmpArray);
  return true;
}

function init() {
  document
    .getElementById("enviar")
    .addEventListener("click", handlerInsertUsuario);

  !localStorage.hasOwnProperty(KEY) && insertUsersStorage(KEY, usuarios);


}

//------------------------ INICIO DE LA APLICACION ------------------------
document.addEventListener("DOMContentLoaded", init);
