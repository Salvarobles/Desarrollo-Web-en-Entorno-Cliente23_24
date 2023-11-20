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

const loadAsync = (src) => {
  return new Promise((resolve, reject) => {
    document.body.innerHTML = "Loading...";

    const img = new Image();
    img.src = src;

    setTimeout(() => {
      img.onload = () => {
        resolve(img);
      };

      img.onerror(() => {
        reject(`Error al cargar la imagen desde ${src}`);
      });
    });
  }).then((img) => {
    document.body.appendChild(img);
  });
};

const loadAsync2 = async (src) => {
  const img_1 = await new Promise((resolve, reject) => {
    document.body.innerHTML = "Loading...";

    const img = new Image();
    img.src = src;

    setTimeout(() => {
      img.onload = () => {
        resolve(img);
      };

      img.onerror(() => {
        reject(`Error al cargar la imagen desde ${src}`);
      });
    });
  }, 20);
  document.body.appendChild(img_1);
};

// Ejercicio 2: Operaciones Aritméticas
// Crea una función que realice operaciones matemáticas de forma asíncrona.
// Debe aceptar dos números y una cadena que indique la operación ('sumar', 'restar', 'multiplicar', 'dividir').
// La función debe devolver una promesa que se resuelva con el resultado de la operación o se rechace si ocurre un error,
// como la división por cero.

const operacion = (num1, num2, cad) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la operación solicitada
      switch (cad) {
        case "sumar":
          resolve(num1 + num2);
          break;
        case "restar":
          resolve(num1 - num2);
          break;
        case "multiplicar":
          resolve(num1 * num2);
          break;
        case "dividir":
          if (num2 !== 0) {
            resolve(num1 / num2);
          } else {
            reject(new Error("No se puede dividir por cero."));
          }
          break;
        default:
          reject(new Error("Operación no válida."));
      }
    }); // Simula una operación asíncrona de 1 segundo
  });
  // cad == sumar ? resolve(num1 + num2) : reject("No se ha podido hacer la suma");
  // cad == restar ? resolve(num1 - num2): reject("No se ha podido hacer la resta");
  // cad == multiplicar ? resolve(num1 * num2) : reject("No se ha podido hacer la multiplicacion");
  // cad == dividir ? resolve(num1 / num2) : reject("No se ha podido hacer la dividir");
};

export default pintarPromesas;
