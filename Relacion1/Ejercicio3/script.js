/**
 * @author Salvador Robles Gómez
 * @description Crea una función llamada filtrarPares que tome un array de números arr y devuelva un
 * nuevo array que contenga solo los números pares.
 **/ 

/**
 * 
 * @param array arr 
 * @returns
 * 
 */

function filtrarPares(arr) {
    const resultado = [];
  
    for (let i = 0; i < arr.length; i++) {
      const elemento = arr[i];
  
      if (elemento % 2 === 0) {
        resultado.push(elemento);
      }
    }
  
    return resultado;
  }

  /**
   * 
   * @param {*} arr 
   * @returns 
   */
  const filtrar = arr => arr.filter(num => num % 2 === 0);


  // Ejemplo de uso:
  const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const resultado = filtrarPares(miArray);
  console.log(resultado); // Resultado: [2, 4, 6, 8]