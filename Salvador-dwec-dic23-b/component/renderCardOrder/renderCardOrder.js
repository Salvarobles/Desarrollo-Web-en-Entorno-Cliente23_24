/**
 * @author Salvador Robles Gómez
 * @description Pintar una carta de tipo order.
 */
import "./style.css";
import { getFoodsApi } from "../../helper/getFoodsApi";

/**
 * Construye una carta y la pinta en el componente que queremos almacenarla, necesitamos una id, nombre, img y precio.
 * @param {number} id
 * @param {string} name
 * @param {string} img
 * @param {number} price
 */
let total = 0;
export function renderCardOrder(container, id) {
  const order = document.createElement("div");
  order.setAttribute("data-set", id);

  getFoodsApi((data) => {
    for (let food of data) {
      if (food.id == id) {
        order.innerHTML = `
            <div class="orderFoods">
                <img
                    src="${food.strCategoryThumb}"
                    class="card-img-top"
                    alt="Imagen de comida"
                />
                    <h5 class="card-title">${food.strCategory}</h5>
                    <p class="card-text">Precio: $ ${food.price}</p>
                    <a href="#" class="btn btn-link card-link">Delete</a>
            </div>
            `;
            total += parseInt(food.price);
      }
    }
  });

  container.appendChild(order);
  
}

