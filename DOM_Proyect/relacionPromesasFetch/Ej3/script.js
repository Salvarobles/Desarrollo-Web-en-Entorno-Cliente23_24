/**
 * @author Salvador Robles Gómez
 * @description Ejercicio 3:
 *  Crea una función que realice una animación de desvanecimiento de un elemento HTML. 
 *  La función debe aceptar el elemento y la duración de la animación, y devolver una promesa que se resuelva cuando la animación haya terminado.
 */

// DECLARAMOS VARIABLES 

const seg = 4;
const container = document.querySelector('.container');

function desvanecer(elemento, segundos) {
    return new Promise((resolve, reject) => {
        try {
            elemento.style.transitionDuration = `${segundos}s`;
            elemento.style.transitionProperty = 'opacity';
            setTimeout(()=>{
                elemento.style.opacity = 0;
            })
            setTimeout(()=>{
                resolve("Adios desvanecimiento")
            }, segundos * 1000);
        } catch (err){
            reject(err);
        }
    });
}

function init(){
    container.innerHTML = `<h2>Desvanecimiento en ${seg} segundos</h2>`;
   
    desvanecer(container,seg)
    .then((respuesta) => container.innerHTML = `<h1>${respuesta}</h1>`)
    .catch((error) => console.error(error));
}

document.addEventListener('DOMContentLoaded', init);