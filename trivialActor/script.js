import actors from "./assets/modules.js";
import { preguntas, respuestas  } from "./assets/modules.js";

// ----------- Declaracion de variables grobales -----------
let miEstructura = [];
const actorKey = "structActors";
const preguntasKey = "structPreguntas";
const respuestasKey = "structRespuestas";

/**
 *  1.- Funcion que coja el objeto y lo guarda entero en el localstorage.
 * @param {String} key 
 * @param {Obejct} structData 
 * @returns 
 */
function insertarStorage(key, structData) {
    return localStorage.setItem(key, JSON.stringify(structData));
  }





function init() {
    !localStorage.hasOwnProperty(actorKey) && insertarStorage(actorKey, actors);
    !localStorage.hasOwnProperty(preguntasKey) && insertarStorage(preguntasKey, preguntas);
    !localStorage.hasOwnProperty(respuestasKey) && insertarStorage(respuestasKey, respuestas);
    
}

//------------- Inicio de Aplicacion ----------------------

init();