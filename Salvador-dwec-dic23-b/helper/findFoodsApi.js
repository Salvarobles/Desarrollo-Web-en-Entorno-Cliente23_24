/**
 * @author Salvador Robles Gómez
 * @description Busca en la base de datos el nombre introducido por el input, el nombre esta sin espaciados.
 * @param {string} nombre 
 */

export function findFoodsApi(nombre, cards) {

    for (let card of cards) {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(nombre)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
    
    // cards.forEach(card => {

    // });
}