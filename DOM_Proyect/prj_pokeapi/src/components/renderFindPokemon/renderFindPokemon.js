import { searchPokemon } from "../../helper/searchPokemon";

export function renderFindPokemon(container) {
  // crear un card en boostrap
  let search = document.createElement("div");
  search.innerHTML = `    
    <div class="buscador">
        <nav class="navbar">
            <div class="container-fluid">
                <form class="d-flex form" role="search">
                <input class="form-control title me-2" id="searchInput" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" id="searchButton" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>`;

  container.appendChild(search);

  // Obtener referencias a los elementos del buscador
  const searchButton = search.querySelector("#searchButton");
  const searchInput = search.querySelector("#searchInput");

  searchButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    searchPokemon(container);
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Evitar el envío del formulario por defecto
      searchPokemon(container);
    }
  });
}
