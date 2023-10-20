/**
 * @author Salvador Robles Gómez
 * @description Este programa calcula la letra de tu DNI.
 **/ 


alert (` Este programa calcula la letra de tu DNI.` )


let dni

const letras=["T", "R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]



function comprobarNumero (dni){
    //Comprobamos si hay un letra
    if (typeof dni === "string") {
        console.log("Contiene letras");
    } else if (dni === undefined) {
        console.log("El numero es NULL");
    } else if (dni <= 0) {
        console.log("El numero es menor que cero");
    } else if (dni > 8 && dni < 8) {
        console.log("El numero esta incompleto o se pasa.");
    } else {
        console.log("Su numero es correcto");
    }
}
    function calcularLetra (){
        let letra = letras[dni%23]
        let resultado =  dni + letra
        console.log(resultado);
    }
    
// function comprobarNumero2 (numero){
//     if (!isNaN(numero)) {
//         console.log("Muchas Gracias por ingresar un numero");
//     } else {
        
//         console.log("Contiene letras");
//     }
// }