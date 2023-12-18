/**
 * @author Salvador Robles Gómez
 * @description Pintar un componente para el precio total.
 */
import "./style.css";

const priceContainer = document.createElement("div");
export function renderPriceTotal(container, total) {

  priceContainer.innerHTML = ` 
    <br>
    <div class="badge bg-primary text-wrap price" style="width: 6rem;">
        ${total} €
    </div>
    <button type="button" class="btn btn-danger btn-pay">Pagar🛒</button>
    `;

    container.appendChild(priceContainer);
}

