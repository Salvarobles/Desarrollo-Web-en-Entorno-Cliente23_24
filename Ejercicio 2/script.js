/**
 * @author Salvador Robles Gómez
 * @description Ejercicio que calcula el Factorial de un numero.
 **/ 


alert (`Este proceso calcula el factorial. Tiene parametros como comprobarNumero y accion.` )

let numero
let cero = -2


function comprobarNumero (numero){
    //Comprobamos si hay un letra
    if (typeof numero === "string") {
        console.log("Contiene letras");
    } else if (numero === undefined) {
        console.log("El numero es NULL");
    } else if (numero <= 0) {
        console.log("El numero es menor que cero");
    } else {
        console.log("Muchas Gracias por ingresar un numero");
    }
}

function accion (numero){
    for(let i=numero; i>=0; i--) {
        console.log(i);
    }
}

    const b = (...numeros) =>  numeros.reduce((acum, num) => typeof num === 'number' ? acum + num: acum+0,0);
