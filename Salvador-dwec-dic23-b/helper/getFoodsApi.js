/**
 * @author Salvador Robles Gomez
 * @description Conseguir las comidas en la base de datos.
 */

const db = "http://localhost:4000/categories";

/**
 * Funcion para conseguir las comidas y el resultado trabajarlo con una funcion o manipulacion que queremos hacerle al resultado
 * @param {} callback
 */
export function getFoodsApi(callback) {
  fetch(db)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la url", resolve.message);
      }
      return response.json();
    })
    .then((JSON) => callback(JSON))
    .catch((err) => {
      console.log("Fallo al coger la api" + err.message);
    });
}
