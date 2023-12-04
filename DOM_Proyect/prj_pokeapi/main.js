// ----------------------- IMPORTS ------------------------------
import fs from "fs/promises";
import { renderFindPokemon } from "./src/components/renderFindPokemon/renderFindPokemon";
import { loadPokemons } from "./src/helper/loadPokemons";
import { renderCardPokemon } from "./src/components/renderCardPokemon/renderCardPokemon";
const pokemonFile = "./server/pokemons.json";
// ------------------------ VARIABLES DOM --------------------------
const contenedor = document.querySelector("#app");
const form = document.querySelector(".form");

// ------------------------ Object ------------------------
const pokeObj = {
  name: "nombrePoke",
  URL: "url",
  imgen: {
    urlFront: "url frontal",
    urlBack: "url Back",
  },
  habilidades: ["hablilidad1, habilidad2, habilidad3"],
};

// ---------------------------- FUNCIONES ------------------------------



function init() {
  //parsePokemonsData(pokemonFile);
  renderFindPokemon(contenedor);
  loadPokemons((array) => {
    array.forEach((pokemon) => {
      renderCardPokemon(contenedor, pokemon)
    })
  });

}
//---------------- Inicializar ---------------
document.addEventListener("DOMContentLoaded", init);
