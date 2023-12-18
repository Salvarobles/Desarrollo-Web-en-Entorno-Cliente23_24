/**
 * @author Salvador Robles Gómez
 */
// -------------------------- IMPORT --------------------------
import { renderCardFoods } from "./component/renderCardFoods/renderCardFoods";
import { renderCardOrder } from "./component/renderCardOrder/renderCardOrder";
import { renderPriceTotal } from "./component/renderPriceTotal/renderPriceTotal";
import { findFoodsApi } from "./helper/findFoodsApi";
import { getFoodsApi } from "./helper/getFoodsApi";
import { saveLocalstorage } from "./helper/saveLocalstorage";
import { saveOrderApi } from "./helper/saveOrderApi";

// -------------------------- VARIABLES DEL DOM --------------------------

// Contenedor para imprimir todas las card Food
const contenedorFood = document.querySelector(".cards");

// Contenedor para imprimir todas los Orders
const contenedorOrder = document.querySelector(".order");

// Input y Btn del buscador
const searchButton = document.querySelector("#searchButton");
const input = document.querySelector("#searchInput");

// ------------------------- FUNCTIONS ------------------------

function init() {
  // Guardamos todas las cards.
  let cards = [];

  // Conseguimos todas las comidas, las mapeamos y por cada objeto lo pintamos pasandole sus valores.
  getFoodsApi((data) => {
    data.forEach((food) => {
      renderCardFoods(contenedorFood, food);
    });
    // Añadimos en la array todas las cartas.
    cards = document.querySelectorAll(".card");
  });

  // ------------------------------ ESCUCHADORES DE EVENTOS ---------------

  // ** BUSCADOR **
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const nombre = input.value.trim().toLowerCase();
    findFoodsApi(nombre, cards);
  });

  input.addEventListener("keydown", (e) => {
    const nombre = input.value.trim().toLowerCase();
    findFoodsApi(nombre, cards);

    if (e.key === "Enter") {
      e.preventDefault();

      const nombre = input.value.trim().toLowerCase();
      findFoodsApi(nombre, cards);
    }

    if (e.key === "Escape") {
      findFoodsApi("", cards);
      input.value = " ";
    }
  });

  // Variable para guardar el total del carrito.
  let total = 0;

  // ** AÑAIR COMIDA **
  contenedorFood.addEventListener("click", (e) => {
    e.preventDefault();
    // Capturamos la card completa
    const card = e.target.closest(".card");
    const precioCard = card.querySelector(".card-text").textContent.match(/\d+/)[0];
    total += parseInt(precioCard);
    // Lo difuminamos y Confirmamos si pincha en el buton.
    if (e.target.classList.contains("card-link")) {
      card.classList.add("difuminado");
      renderCardOrder(
        contenedorOrder,
        e.target.parentElement.parentElement.dataset.set
      );

      renderPriceTotal(contenedorOrder, total)
    }
  });

  // ** ElIMINAR COMIDA **
  contenedorOrder.addEventListener("click", (e) => {
    e.preventDefault();

    // Capturamos la card completa
    const orderCard = e.target.closest(".orderFoods");

    // const priceContainer = 
    const id = e.target.parentElement.parentElement.dataset.set;

    // Le quitamos el difuminado y Confirmamos si pincha en el buton de delete.
    if (e.target.classList.contains("card-link")) {
      cards.forEach((card) => {
        if (card.dataset.set === id) {
          card.classList.remove("difuminado");
          orderCard.remove();
          total -= card.querySelector(".card-text").textContent.match(/\d+/)[0];
          renderPriceTotal(contenedorOrder, total);
        }
      });
    }

    // Si pincha en pagar y el total es mayor que 0, enviamos el order a loclstorage y a la api.
      if (e.target.classList.contains("btn-pay") && total > 0) {
        // Creamos el objeto Order con los datos que tenga el pedido.
        const order = {};
        const fecha = new Date();
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        const minuto = fecha.getMinutes();
        const hora = fecha.getHours();
        
        order.fecha = `${dia}-${mes}-${año} ${hora}:${minuto}`;
        
        order.platos = [];

        console.log(order.fecha);
        const arrayPlatos = contenedorOrder.querySelectorAll(".orderFoods");
        arrayPlatos.forEach((orderPlato) => {
          const id = orderPlato.parentElement.dataset.set;
          const name = orderPlato.querySelector(".card-title").textContent;
          const price = orderPlato.querySelector(".card-text").textContent.match(/\d+/)[0];

          const plato = {
            id,
            name,
            price,
          }
          order.platos.push(plato);    
        })
        order.total = total;
        saveLocalstorage(order);
        saveOrderApi(order);

        cards.forEach((card) => {
          
            card.classList.remove("difuminado");
          })

        arrayPlatos.forEach((plato) => {
          plato.parentElement.remove();
        })

        total = 0;
        renderPriceTotal(contenedorOrder, total)
        
        }

  });
}

// ------------------------- INICIALIZACION ---------------------

document.addEventListener("DOMContentLoaded", init());
