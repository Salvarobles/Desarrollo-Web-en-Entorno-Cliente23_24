/**
 * Utilizaremos el archivo db.json para que parsearlo y lo cargamos en el localStorage.
 * @param {JSON} pokemonsData
 */

export function loadPokemons(callback) {
  fetch("http://localhost:4000/pokemonObj")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fallo al fetchear");
      }
      return response.json();
    })
    .then((data) => callback(data))
    .catch((err) => console.error(err.message));
}
