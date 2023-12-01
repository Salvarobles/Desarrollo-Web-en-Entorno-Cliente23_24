// --------------- Import ------------
import fetch from "node-fetch";
import fs from "fs/promises";

// ----- Cargar y Definir json --------------------------------
const jsonFilePatch = "./server/db.json";
const pokemonFile = "./server/pokemons.json";

//------------- node Fetch -----------
//const { default: fetch } = require("node-fetch");

async function getPokemon() {
  try {
    //
    const response = await fetch(jsonFilePatch);
    const data = await response.json();
    const { name, link } = data;

    try {
      const response = await fetch(link);
      const data = await response.json();
      const { a, b, c, d, e, f, id, g, h, i, name, j, k, l, m, sprites } = data;
      //ahora guardo esa informacion a la DB de mi api.
      await fs.writeFile(
        pokemonFile,
        JSON.stringify({ id, name, sprites }, null, 2)
      );
    } catch (error) {
      console.log("Error al acceder a la pokemons api2", err);
    }
  } catch (err) {
    console.log("Error al acceder a la pokemons api", err);
  }
}

getPokemon();
