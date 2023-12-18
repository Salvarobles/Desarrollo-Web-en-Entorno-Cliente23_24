/**
 * @author Salvador Robles Robles
 * @description Eliminar una card y de la base de datos.
 */
const db = "../server/db";
const orderFoods = docuement.querySelector(".orderFoods")
const contenedorOrder = document.querySelector(".order");
/**
 * Eliminar el objeto en la base de datos y busca entre todos las cartas para eliminar la corresponediente.
 * @param {number} id 
 */
export function deleteFood(id) { 
    fetch(db, {
        method: 'DELETE',
        headers: 'Content-Type: application/json',
        body: {
            id: id,
        }
    })
    
    orderFoods.map((order)=>{
        
        if (order.data-set == id){
            contenedorOrder.removeChild(order);
        }
    })

}