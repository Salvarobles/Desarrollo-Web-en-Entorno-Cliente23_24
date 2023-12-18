/**
 * @author Salvador Robles Gómez
 * @description Componente para pintar las cartas de la comida.
 */
/**
 * Construye una carta y la pinta en el componente que queremos almacenarla, necesitamos una id, nombre, img y precio. 
 * @param {Element} component 
 * @param {number} id 
 * @param {string} name 
 * @param {string} img 
 * @param {number} price 
 */
export function renderCardFoods(component, food) {
    const card = document.createElement("div");
    card.setAttribute("data-set", food.id);
    card.classList.add("card");
    card.style.width = "25%";
    component.style.gap = "20px";
  card.innerHTML += `
        <img
            src="${food.strCategoryThumb}"
            class="card-img-top"
            alt="Imagen de comida"
            style="height: 10vh; width: 10vh;"
        />
        <div class="card-body">
            <h5 class="card-title">${food.strCategory}</h5>
            <p class="card-text">Precio: $ ${food.price}</p>
            <a href="#" class="btn btn-link card-link">Añadir</a>
        </div>

    `;

    component.appendChild(card);
}


/**
 * Este escuchador interactua cuando haga click a un carta y se va hacia una funcion llamada addFood.
 */
// card.addEventListener("click",() => {
//     addFood(component, id);
// })
