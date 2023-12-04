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
    const pokemonObj = [ ];
    const response = await fetch(apiUrl);
    const data = await response.json();
    const { a, b, c, results } = data;
    //ahora guardo esa informacion a la DB de mi api.
    
    for (const obj of results) {
      // Guardamos el link de cada pokemon.
      const url = obj.url;

      // Realiza operaciones con la URL, como obtener más datos o almacenarla en otro lugar
      const response = await fetch(url);
      const pokemonData = await response.json();
      const { id, name, sprites, abilities } = pokemonData;

      const back_default = sprites.back_default;
      const front_default = sprites.front_default;
      const img = {back_default, front_default};
      const abilitie = [];

      const abilityList = abilities.map(abi =>abilitie.push(abi.ability.name));

      // for (const abi of abilityList) {
      //   abilitie.push(abi.name)
      // }

      // Guarda la información en el archivo de pokemons
      pokemonObj.push({ id, name, img, abilitie });
    }

    await fs.writeFile(filePatch, JSON.stringify({pokemonObj}, null, 2));
    

  } catch (err) {
    console.log("Error al acceder a la poke api", err);
  }
}

fecthAndSave();
