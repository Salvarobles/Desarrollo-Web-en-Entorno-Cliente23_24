// ----------------------- IMPORTS ------------------------------
import { renderFindPokemon } from "./src/components/renderFindPokemon/renderFindPokemon"

// ------------------------ VARIABLES DOM --------------------------
const contenedor = document.querySelector("#app");



const dataPoke = {
  name: "nombrePoke",
  URL: "url",
  imgen: {
    urlFront: "url frontal",
    urlBack: "url Back",
  },
  habilidades: ["hablilidad1, habilidad2, habilidad3"],
}


// ---------------------------- FUNCIONES ------------------------------



renderFindPokemon(contenedor);