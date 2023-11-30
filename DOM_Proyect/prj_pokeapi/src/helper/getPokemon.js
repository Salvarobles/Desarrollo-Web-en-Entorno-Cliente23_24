// --------------- Import ------------
import fetch from "node-fetch";
import fs from "fs/promises";

// ----- Cargar y Definir json --------------------------------
const jsonFilePatch = '/server/db.json';
const pokemonFile = '/server/pokemons.json';

//------------- node Fetch -----------
//const { default: fetch } = require("node-fetch");

async function getPokemon() {
  try {
    //
    const response = await fetch(jsonFilePatch);
    const data = await response.json();
    
    const { name, results } = data;
    //ahora guardo esa informacion a la DB de mi api.
    await fs.writeFile(pokemonFile, JSON.stringify({ results }, null, 2));
  } catch (err) {
    console.log("Error al acceder a la poke api", err);
  }
}

getPokemon();