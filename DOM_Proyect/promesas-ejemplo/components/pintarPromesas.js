import { users } from "../assets/users";

/**
 * @param {HTMLDivElement} elemnt
 */
const pintarPromesas = (element) => {
  // EJERCICIO0
  // findUser(31, (error, user) => {
  //     if (error) {
  //       element.innerHTML = error;
  //     } else {
  //       element.innerHTML = `El usuario: ${user.id} es correcto`
  //     }
  // })
  // .then(user =>element.innerHTML = `El usuario: ${user.id} es correcto`)
  // .catch(user => element.innerHTML = error)
  // EJERCICIO1
  // const imageUrl = "https://raw.githubusercontent.com/isaiasfl/ApuntesDWEC/main/Ejercicios/img_dev.jpeg";
  // loadAsync2(imageUrl)
  //   .then((loadedImage) => {
  //     element.innerHTML = `Imagen cargada correctamente desde ${imageUrl}`;
  //   })
  //   .catch((error) => {
  //     element.innerHTML = error;
  //   });

  //EJERCICIO3
  operacion(1, 2, sumar)
  .then((sumar) => element.innerHTML = sumar)
  .catch((error) => {element.innerHTML = error});
};

// Ejercicio 0
const findUser = (id, callback) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      resolve(user);
    }
    reject(`El usuario: ${id} es incorrecto`);
  }).then(
    (user) => callback(null, user),
    (error) => callback(error, null)
  );
};

// Ejercicio 1: Cargar Imagen Asíncronamente
// Crea una función que cargue una imagen de forma asíncrona y la añada al cuerpo del documento. La función loadAsync
// se le pasará una src como parámetro. La función debe devolver una promesa que se resuelva con la imagen cargada o se rechace si hay algún error.
// Para simular asincronía, la imagen se cargará transcurridos 2 segundos. Mientras tanto debe de aparecer por pantalla `loading...``



export default pintarPromesas;
