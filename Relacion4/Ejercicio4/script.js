/**
 * @author Salvador Robles Gómez
 * @description Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una propiedad
 * con la clave 'key' y un valor igual a la cadena. Devuelve el objeto.
 */ 

const cadena = "Salvador";

function crearObjeto(cadena) {
    const objeto = {
        key : cadena
    };
    return objeto;
}

console.log(crearObjeto(cadena));