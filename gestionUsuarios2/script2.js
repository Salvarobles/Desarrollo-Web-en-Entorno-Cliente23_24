import { users } from "./assets/modules.js";

// ----------- Declaracion de variables grobales -----------
const KEY = "structUsers";
let myStructUsers = [];

// ------------ Declaracion de Funciones -----------

/**
 * @comment  1.- Funcion que coja el objeto usuario y lo guarde entero en el localstorage.
 * @param {String} key
 * @param {Object} structData
 * @returns undefined
 */
function insertUsersStorage(key, structData) {
  return localStorage.setItem(key, JSON.stringify(structData));
}

/**
 * 2.- Funcion que carga del LocalStorage una key y la almacena en una estructura.
 * @param {String} key
 * @returns array
 */
function loadStruct(key) {
  const data = JSON.parse(localStorage.getItem(key));
  // Si la key no existe data devuelve null
  return data ? JSON.stringify(data) : [];
}

function saveStructUserPasswords(key, dataStruct) {
  const tmpArray = [];
  dataStruct.map((user) =>
    tmpArray.push({ [user.login.username]: btoa(user.login.password) })
  );

  return localStorage.setItem(key, JSON.Sringify(tmpArray));
}

function handleSave() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Debes de introducir Username y password");
    return false;
  }

  const tmpArray = loadStruct("usersPasswords");

  let encontrado = tmpArray.some(objeto.hasOwnProperty(username));

  if (encontrado) {
    alert(`Usuario con ${username} es existente`);
  } else {
    tmpArray.push({ [username]: btoa(password) });
    alert(`Bienvenido ${username}`);
  }

  //como no lo he encontrado... lo añado a mi tmpArray y lo guardo tmpArray en el localstroge

  insertUsersStorage("usersPasswords", tmpArray);
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function handLoad() {
  const tmpArray = loadStruct("usersPasswords");

  let textarea = document.getElementById("usuariospasswords");

  let text = tmpArray.reduce((acum, objeto) => {
    for (let clave in objeto) {
      acum += `Username: ${clave} \t \t Password: ${atob(objeto[clave])} \n `;
    }
    return acum;
  }, "");

  textarea.value = text;
}

function init() {
  if (!localStorage.hasOwnProperty(KEY)) {
    insertUsersStorage(KEY, users);
  }
  // localStorage.hasOwnProperty(KEY) && insertUsersStorage(KEY,users); version 2.

  myStructUsers = loadStruct(KEY);
  
  !localStorage.hasOwnProperty(KEY) &&
    saveStructUserPasswords("usersPasswords", myStructUsers);
}

// ---------------Captura de eventos de formulario --------------------
document.getElementById("guardar").addEventListener("click", handleSave);
document.getElementById("cargar").addEventListener("click", handLoad);

//-------------- Inicio de Aplicacion

init();

/**
 * @description Crear un proyecto en js, que utilizando modulos y un archivo json con informacion me
 *  permita atraves de una serie de funciones guardar en el localstorage el username, y el password encriptado.
 *  Si intentamos introducir un usuario (username) existido mostrara un mensaje de error.
 *
 */
//funcion que guarde en el local storage mi estructura de usuario
// localStorage.clear();

// function usuariosLocalStorage(users) {
//     localStorage.setItem("USUARIOS", JSON.stringify(users));
// }

// window.onload = () => {
//     usuariosLocalStorage(users);
// }

//funcion que carge del local storage mi estructura de usuario.
// function cargarUsuariosLocalStorage(users) {

// }

// document.getElementById("cargar").addEventListener("click", cargarUsuariosLocalStorage);

//funcion que valide que el username no este repetido.

// function validarUsername() {
//     const username = document.getElementById("username").value;

//     for (let usuario of users) {
//         if(usuario.login.username === username) {
//             alert(`Usuarios existente: ${username}, crea un usuario distinto`);
//         }
//     }
// }

// document.getElementById("guardar").addEventListener("click", validarUsername);

//funcion que guaerde en el local storage "username" y "password" encriptado.

// function saveInfoUsersLocalStorage() {
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     localStorage.setItem(username, btoa(password));
// }

// document.getElementById("guardar").addEventListener("click", saveInfoUsersLocalStorage);

//capturar el evento del click del raton del boton GUARDAR.
// function saveUsers() {
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     alert(`Bienvenido: ${username}, password: ${password}`);
// }

// document.getElementById("guardar").addEventListener("click", saveUsers);

// capturar el evento del click del raton del boton cargar.
//y mostrar la informacion en el textarea.

// function mostrarInfoUsers() {
//     const infoUsers = new Map();

//     const textarea = document.getElementById("usuariospasswords");

//     for (let usuario of users) {

//         const { login: { username }, login: { password }  } = usuario; //Haciendo el destructuring
//         infoUsers.set(username, password);
//     }

//     let infoTexto = '';
//     for (let [username, password] of infoUsers.entries()) {
//         infoTexto += `Username: ${username}, Password: ${password}\n`;
//     }

//     textarea.value = infoTexto;

// }

// document.getElementById("cargar").addEventListener("click", mostrarInfoUsers);

//como codificar las contraseñas "btoa " y "atob".
