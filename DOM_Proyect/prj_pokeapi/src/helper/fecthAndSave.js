//------------- node Fetch -----------

//const { default: fetch } = require("node-fetch");
// Import
import fetch from "node-fetch";
import fs from "fs/promises";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

const filePatch = "./server/db.json";

async function fecthAndSave() {
  try {
    //
    const response = await fetch(apiUrl);
    const data = await response.json();
    const { a, b, c, results } = data;
    //ahora guardo esa informacion a la DB de mi api.
    await fs.writeFile(filePatch, JSON.stringify(results, null, 2));
  } catch (err) {
    console.log("Error al acceder a la poke api", err);
  }
}

fecthAndSave();
