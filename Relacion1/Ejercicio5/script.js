/**
 * @author Salvador Robles Gómez
 * @description Define una función llamada contarPalabras que tome una cadena de texto y devuelva un
 * objeto que cuente cuántas veces aparece cada palabra en el texto.
 */



let texto = "Hola mundo";

function contarPalabras(texto) {

    let palabras = texto.split(" ");
    let contador = {};
    
    for (let i = 0; i < palabras.length; i++) {
        if (contador[palabras[i]] === undefined) {
            contador[palabras[i]] = 1;
        } else {
            contador[palabras[i]] += 1;
        }
    }

    return contador;
}

// console.log(contarPalabras(texto));


const contarPalabras2 = (texto) => texto.split(" ").reduce((acumulador, palabra) => acumulador + palabra) = new Object();

console.log(contarPalabras(texto));