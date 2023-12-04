// Buscar el pokemon que inserte el usuario y que lo muestre

export function searchPokemon(component, callback) {
  const name = document.getElementById("searchInput");

  const pokemonName = name.value.trim().toLowerCase();

  // Obtener todas las tarjetas de Pokémon dentro del contenedor
  const pokemonCards = component.querySelectorAll(".card");

  // Iterar sobre las tarjetas para encontrar el Pokémon buscado
  pokemonCards.forEach((card) => {
    const cardTitle = card
      .querySelector(".card-title")
      .textContent.toLowerCase();

    // Comparar con el nombre del Pokémon buscado
    if (cardTitle.includes(pokemonName)) {
      // Mostrar la tarjeta si coincide
      card.style.display = "block";
    } else {
      // Ocultar la tarjeta si no coincide
      card.style.display = "none";
    }
  });
}
