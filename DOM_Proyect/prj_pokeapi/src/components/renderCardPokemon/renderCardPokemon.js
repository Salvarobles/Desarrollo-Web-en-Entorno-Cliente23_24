const filePath = "./server/db.json";

export function renderCardPokemon(container, pokemon) {
  // crear un card en boostrap
  const card = document.createElement("div");
  card.innerHTML = `
    <div class="card" style="width: 18rem; ">
        <div class="img-container">
            <img src="${pokemon.img.front_default}" class="card-img-top front" style="display:block;" alt="...">
            <img src="${pokemon.img.back_default}" class="card-img-top back" style="display:none;" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
            <p class="titleFront" style="display:block;">Habilidades: ${pokemon.abilitie}</p>
            <p class="titleBack" style="display:none;" >Culito Culito</p>
        </div>
    </div>
</div>
`;
  container.appendChild(card);

  card.addEventListener("click", () => {

    const imgFront = card.querySelector(".front");
    const imgBack = card.querySelector(".back");
    const titleFront = card.querySelector(".titleFront");
    const titleBack = card.querySelector(".titleBack");
    

    imgFront.style.display = (imgFront.style.display === "none") ? "block" : "none";
    imgBack.style.display = (imgBack.style.display === "none") ? "block" : "none";

    titleFront.style.display = (titleFront.style.display === "none") ? "block" : "none";
    titleBack.style.display = (titleBack.style.display === "none") ? "block" : "none";
  });

  
}
