// -------Import---------
import saludo from "./assets/modulos.js";
import { sumar } from "./assets/modulos.js";
import usuarios from "./assets/variable.js";

// Funcion que calcula la suma de 2 numeros
// pasados como parametros.
// console.log(saludo("salva"));
// console.log(sumar(1, 2));
// console.table(usuarios);

/*Crear una app que a traves de una 
funcion le pase como parametro un array de objetos y me devuelve en un map el apellidos, email de todos los usuarios que tiene correo español.*/

// function usuariosMap(usuarios) {
//   const email = new Map();

//   const buscar = usuarios.email;

//   usuarios.forEach((usuarios) => {
//     if (usuario.email === buscar) {
//       email.set("apellidos", usuarios.apellidos);
//       email.set("email", usuarios.email);
//     }
//   });

//   return email;
// }

// console.log(email.get("apellidos"));

const spanishUsersFilter = (usuarios) =>
  usuarios.filter((usuario) => usuario.email.endsWith(".es"));

const spanishInfo = new Map();

spanishUsersFilter(usuarios).map((usuario) =>
  spanishInfo.set(`${usuario.lastname} ${usuario.firstname}`, usuario.email)
);

// console.log(spanishInfo);


/**
 * Version 2
 * @param {} usuarios 
 * @returns 
 */
const spanishUsers = (usuarios) =>
  usuarios.reduce(
    (acum, objeto) =>
      objeto.email.endsWith(".es")
        ? acum.set(`${objeto.lastname}_${objeto.firstname}`, objeto.email)
        : acum,
    new Map()
  );

// console.log(spanishUsers(usuarios));



//Sacar los email acabado en es



  function usuarioEmail(usuarios) {
  
    const infoUsers = new Map();
  
    for (let usuario of usuarios) {
      if (usuario.email.endsWith(".es")) {
        const { email, lastname, firstname } = usuario; //Haciendo el destructuring
        infoUsers.set(`${lastname}_${firstname}`, email);
      } 
    }

  return infoUsers;
  
}

// console.log(usuarioEmail(usuarios)); 

function usuarioPhone(usuarios) {

  const {firstname, lastname, phone } = usuarios; 
  const infoPhone = new Map();

  usuarios.reduce(acum, usuarios) => {
    acum.phone.starstWith("(666)") ? acum.set(`${lastname}_${firstname}`, usuarios.phone) : acum;
  }
    
    

  return infoPhone;
}

console.log(usuarioPhone(usuarios));
