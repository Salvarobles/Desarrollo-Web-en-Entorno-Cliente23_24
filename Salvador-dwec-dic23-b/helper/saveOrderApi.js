/**
 * @author Salvador Robles Gómez
 * @description Crear una carta order y añadirlo en la bd.
 */
import {renderCardOrder}  from "../component/renderCardOrder/renderCardOrder";

const db = "http://localhost:4000/order";

/**
 * Envia el order a la bd.
 * @param {obj} order 
 */
export function saveOrderApi(order){
    fetch(db, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            id: null,
            order
        }),
    })
        .then((data) => {

        })
        .catch((error) => {console.log(`Fallo al grabar el order ${error.message}`)});
    
}