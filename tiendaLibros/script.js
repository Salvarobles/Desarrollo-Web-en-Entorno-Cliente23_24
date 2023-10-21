/**
 * @description Crea una aplicación que modele una tienda de libros. Cada libro debe tener un título, un
 * autor y un precio. La tienda debe permitir agregar libros, eliminar libros y calcular el precio total de
 * todos los libros en el inventario.
 */

//------------------IMPORT------------------
import { libro as LibroLiteral } from "./assets/objectLiteral.js";
import { LibroFuncional as LibroFuncion } from "./assets/funcionConstructura.js";
import { LibroClass as LibroClass } from "./assets/usandoClases.js";

//------------------VARIABLES------------------
const libros = [];
const keyLibreria = "libreria";

const cestalibros = [];
const keyCesta = "cesta";
//------------------FUNCIONES------------------
/**
 * Insertamos nuestra array en la local storage.
 * @param {String} key 
 * @param {Array} structure 
 * @returns 
 */
function insertLibroStructure(key, structure){
    return localStorage.setItem(key, JSON.stringify(structure));
}

/**
 * Obtenemos nuestra array desde la local storage.
 * @param {String} key 
 * @returns
 * */

function loadLibroStructure(key){
    return JSON.parse(localStorage.getItem(key));
}

function handlerAgregarLibro(e){
    e.preventDefault();//<-- Impedimos que se recarge la pagina.

    //Obtenemos los valores del formulario.
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const precio = document.getElementById("precio").value;

    //Creamos nuestro objeto Literal.
    let newLibro = Object.create(LibroLiteral);

    newLibro.titulo = titulo;
    newLibro.autor = autor;
    newLibro.precio = precio;

    //Obtenemos nuestro local storage de libreria en un array tmp.
    const tpmArray = loadLibroStructure(keyLibreria);

    //Comprobamos si el titulo del libro esta en la libreria.
    const encontradoTitulo = tpmArray.some((objeto) => objeto._titulo === newLibro._titulo);
    const encontradoAutor = tpmArray.some((objeto) => objeto._autor === newLibro._autor);

    if (encontradoTitulo && encontradoAutor) {
        alert(`El libro ${titulo} del autor ${autor} ya se encuentra en la libreria`);
        return false;
    }

    //Agregamos el libro a la libreria.


    tpmArray.push(newLibro);
    insertLibroStructure(keyLibreria, tpmArray);
    return true;
}

function init() {
    document.getElementById("agregar").addEventListener("click", handlerAgregarLibro);

    !localStorage.hasOwnProperty("keyLibreria") && insertLibroStructure(keyLibreria, libros);
}

//------------------INICIALIZACION------------------

init();




