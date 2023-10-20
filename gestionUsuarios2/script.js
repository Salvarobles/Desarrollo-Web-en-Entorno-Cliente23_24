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
  // const data = JSON.parse(localStorage.getItem(key));
  // // Si la key no existe data devuelve null
  // return data ? JSON.stringify(data) : [];
  return JSON.parse(localStorage.getItem(key));
}

/**
 * 3.- Funcion que carga del localStorage el usuario y su contraseña.
 * @param {String} key
 * @param {Objeto} dataStruct
 * @returns
 */
function saveStructUserPasswords(key, dataStruct) {
  const tmpArray = [];
  dataStruct.map((user) =>
    tmpArray.push({ [user.login.username]: btoa(user.login.password) })
  );

  // dataStruct.forEach((user) => {
  //     const userObj = { [user.login.username]: btoa(user.login.password) };
  //     tmpArray.push(userObj);
  //   });

  // for (const user of dataStruct) {
  //   const {
  //     login: { username, password },
  //   } = user;
  //   const tmpObject = {};
  //   tmpObject[username] = btoa(password);
  //   tmpArray.push(tmpObject);
  // }

  localStorage.setItem(key, JSON.stringify(tmpArray));
}

function handleSave() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Debes de introducir Username y password");
    return false;
  }

  const tmpArray = loadStruct("usersPasswords");
  const encontrado = tmpArray.some((objeto) => objeto.hasOwnProperty(username));

  if (encontrado) {
    alert(`Usuario con ${username} es existente`);
    return false;
  }
  //como no lo he encontrado... lo añado a mi tmpArray y lo guardo tmpArray en el localstroge

  tmpArray.push({ [username]: btoa(password) });
  alert(`Bienvenido ${username}`);
  insertUsersStorage("usersPasswords", tmpArray);
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  return true;
}

function handLoad() {
  const tmpArray = loadStruct("usersPasswords");
  let textarea = document.getElementById("usuariospasswords");

  // let text = tmpArray.reduce((acum, objeto) => {
  //   for (let clave in objeto) {
  //     acum += `Username: ${clave} \t \t Password: ${atob(objeto[clave])} \n `;
  //   }
  //   return acum;
  // }, "");

  const text = tmpArray.map((objeto) => {
    const valores = Object.entries(objeto);
    return valores.map(([clave, valor]) => `Username: ${clave} \t Password: ${atob(valor)} \n`);
  },);

  textarea.value = text;
}

function init() {
  if (!localStorage.hasOwnProperty(KEY)) {
    insertUsersStorage(KEY, users);
  }

  myStructUsers = loadStruct(KEY);

  !localStorage.hasOwnProperty("usersPasswords") &&
    saveStructUserPasswords("usersPasswords", myStructUsers);
}

// ---------------Captura de eventos de formulario --------------------
document.getElementById("guardar").addEventListener("click", handleSave);
document.getElementById("cargar").addEventListener("click", handLoad);

//-------------- Inicio de Aplicacion

init();
