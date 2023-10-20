"strict mode";
/**
 * @author Salvador Robles Gómez
 * @description Define una funcion llamada eliminarDuplicados que tome un array arr. La funcion debe eliminar los elementos duplicados y
 * devolver un nuevo array con elementos unicos, manteniendo el orden original.
 **/ 


/**
 * Funcion al uso
 * @param array arr 
 * @returns 
 */
function eliminarDuplicados(arr) {

    const arrayUnico = [];
    const resultado = [];
  
    for (let i = 0; i < arr.length; i++) {
      const elemento = arr[i];
  
      // Si el elemento no está en el objeto arrayUnico, lo añadimos al resultado
      if (!arrayUnico[elemento]) {
        resultado.push(elemento);
        
      }
    }
  
    return resultado;
  }
  
  // Ejemplo de uso:
  const miArray = [1, 2, 2, 3, 4, 4, 5];
  const resultado = eliminarDuplicados(miArray);
  console.log(resultado); // Resultado: [1, 2, 3, 4, 5]
  
  /**
   * Funcion al uso 2
   * @param {*} mArray 
   * @returns 
   */
  function eliminarDuplicados2(mArray) {
    const unicArray = [];

    for (const num of mArray) {
      
      if (unicArray.includes()) {
        unicArray.push(num);
      }
    }
    return unicArray;
  }

  /**
   * Funcion al uso 3
   * @param {} mArray 
   */
  function eliminarDuplicados3(mArray) {

    const unicArray = [];

    for (const num of mArray) {
      
      unicArray.includes() ? unicArray.push(num) : null;

    }
    return unicArray;
  }

  /**
   * Funcion al uso 4
   * @param {} mArray 
   */
  function eliminarDuplicados4(mArray) {
    return [... new Set(mArray)];
  }

  /**
   * Funcion arrows
   * @param {*} mArray 
   * @returns 
   */
  const n = mArray => [...new Set(mArray)];
