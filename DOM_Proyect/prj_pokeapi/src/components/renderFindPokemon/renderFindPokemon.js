export function renderFindPokemon(container) {
  // crear un card en boostrap
  let search = document.createElement("div");
  search.innerHTML = `    
    <div class="buscador">
        <nav class="navbar">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>`;

    container.appendChild(search);
}
