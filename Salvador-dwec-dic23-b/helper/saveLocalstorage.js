/**
 * @author Salvador Robles Gómez
 * @description Guardar en el local Storage el pedido del usuario.
 */

export function saveLocalstorage(order){
    const load = JSON.parse(localStorage.getItem('order'))  ?? [];
    load.push(order);
    localStorage.setItem("order", JSON.stringify(load));
}

