// Ejercicio 2: Operaciones Aritméticas
// Crea una función que realice operaciones matemáticas de forma asíncrona.
// Debe aceptar dos números y una cadena que indique la operación ('sumar', 'restar', 'multiplicar', 'dividir').
// La función debe devolver una promesa que se resuelva con el resultado de la operación o se rechace si ocurre un error,
// como la división por cero.


const operacion = (num1, num2, op) => {
    return new Promise((resolve, reject) => {
        //comparamos si los dos valores son numeros
        if (typeof(num1) !== "number" || typeof(num2) !== "number") {
            reject("Error en la operación de suma: algún operando no es un número");
        }
        
        let result = null;
        // Realiza la operación solicitada
        switch (op) {
          case "sumar":
            result = num1 + num2;
            resolve(result);
            break;
          case "restar":
            result = num1 - num2;
            resolve(result);
            break;
          case "multiplicar":
            result = num1 * num2;
            resolve(result);
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
      });
    };

    operacion(2,2,"sumar")
    .then((resultado) => console.log(`${resultado}`))
    .catch((err) => console.log(err))
