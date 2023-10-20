/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome un objeto. Debería devolver el valor de la propiedad cuya clave sea
 * pais. Si no existiese dicha clave devolvería : "No se encuentra"
 */


const paises = {
    argentina : "Argentina",
    brasil : "Brasil",
    chile : "Chile",
    colombia : "Colombia",
    ecuador : "Ecuador",
    peru : "Peru",
    uruguay : "Uruguay",
    venezuela : "Venezuela"
}

const persona = {
    nombre:    "Nombre",
    pais : "Argentina",
}

const persona2 = {
    nombre:    "Nombre",
}

function confirmarPais(persona) {
    if (persona['pais']) {
        return "El pais " + persona.pais + " existe ";
    } else {
        return  "No se encuentra";
    } 
}

console.log(confirmarPais(persona));
console.log(confirmarPais(persona2));
