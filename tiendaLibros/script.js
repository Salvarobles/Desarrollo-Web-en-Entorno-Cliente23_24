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
const keyLibreria = "libreria";
const libros = [];

const keyCesta = "cesta";
const cestalibros = [];

//------------------FUNCIONES------------------
/**
 * @description Insertamos nuestra array en la local storage.
 * @param {String} key
 * @param {Array} structure
 * @returns
 */
function insertLibroStructure(key, structure) {
  return localStorage.setItem(key, JSON.stringify(structure));
}

/**
 * @description Obtenemos nuestra array desde la local storage.
 * @param {String} key
 * @returns
 * */

function loadLibroStructure(key) {
  return JSON.parse(localStorage.getItem(key));
}

/**
 * @description Validamos que el formulario este lleno,
 * que no haya un libro repetido en la libreria y agregamos ese nuevoLibro a la libreria.
 * @param {} e para no recargar la pagina.
 * @returns
 */
function handlerAgregarLibro(e) {
  e.preventDefault(); //<-- Impedimos que se recarge la pagina.

  //Comprobamos si el usuario a pasado valores por el formulario.
  const progress = document.getElementById("progress");
  progress.style.display = "block";
  if (
    document.getElementById("titulo").value === "" ||
    document.getElementById("autor").value === "" ||
    document.getElementById("precio").value === ""
  ) {
    setTimeout(function () {
      // Ocultar el progreso después de completarse
      setTimeout(function () {
        progress.style.display = "none";
      }, 1000);
      alert("Debe llenar todos los campos");
      // Esperar 1 segundo antes de ocultar
    }, 3000); // Rellenar durante 3 segundos
    return false;
  }

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
  tpmArray.sort();
  //Comprobamos si el titulo del libro esta en la libreria.
  const encontradoTitulo = tpmArray.some(
    (objeto) => objeto._titulo === newLibro._titulo
  );
  const encontradoAutor = tpmArray.some(
    (objeto) => objeto._autor === newLibro._autor
  );

  //Comprobamos si el autor y el libro ya están en la libreria.
  if (encontradoTitulo && encontradoAutor) {
    // Simulamos el progreso durante 3 segundos
    setTimeout(function () {
      // Ocultar el progreso después de completarse
      setTimeout(function () {
        progress.style.display = "none";
      }, 1000);
      alert(
        `El libro ${titulo} del autor ${autor} ya se encuentra en la libreria`
      );
      // Esperar 1 segundo antes de ocujltar
    }, 3000); // Rellenar durante 3 segundos
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("precio").value = "";
    return false;
  }

  // Simulamos el progreso durante 3 segundos
  setTimeout(function () {
    // Ocultar el progreso después de completarse
    setTimeout(function () {
      progress.style.display = "none";
    }, 1000);
    newLibro.mostrarLibroAgregado();
    // Esperar 1 segundo antes de ocujltar
  }, 3000); // Rellenar durante 3 segundos

  //Agregamos el libro a la libreria.
  tpmArray.push(newLibro);
  // añadirSelect("selectLibro", tpmArray);
  insertLibroStructure(keyLibreria, tpmArray);
  insertLibroStructure(keyCesta, tpmArray);

  //Poner los valores del formulario a 0.
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("precio").value = "";

  return true;
}

/**
 * @description Añadimos los libros de la libreria al select y comprobamos que no se inserte libros repetidos.
 */
function añadirSelect() {
  const array = loadLibroStructure(keyLibreria);
  array.sort();

  for (const obj of array) {
    const option = document.createElement("opcion");
    option.value = obj._titulo;
    option.text = `${obj._titulo} de ${obj._autor} por ${obj._precio}€`;
    //si existe el libro en el select, no lo agregamos.
    !document.getElementById("selectLibro").innerHTML.includes(option.text)
      ? (document.getElementById("selectLibro").innerHTML +=
          "<option value='" + option.value + "'>" + option.text + "</option>")
      : false;
  }
}

/**
 * @description Cargar los libros de la cesta al textarea.
 */
function cargarLibrosTextarea() {
  const tmpArray = loadLibroStructure(keyCesta);
  tmpArray.sort();

  let textArea = document.getElementById("cestaLibros");
  //si ya existe ese libro en el textarea, no lo agregamos
  for (const libro of tmpArray) {
    if (!textArea.value.includes(libro._titulo)) {
      textArea.value += `\n El libro añadido: ${libro._titulo} de ${libro._autor} por ${libro._precio}€`;
    }
  }

  textArea.value += tmpArray.map((objeto) => {
    !textArea.value.includes(
      `El libro añadido: ${objeto._titulo} de ${objeto._autor} por ${objeto._precio}€`
    ) || ","
      ? `\n El libro añadido: ${objeto._titulo} de ${objeto._autor} por ${objeto._precio}€`
      : false;
  });
}

/**
 * @description Añadimos el libro seleccionado al textarea.
 */
function añadirLibrosTextarea() {
  const select = document.getElementById("selectLibro");

  let textArea = document.getElementById("cestaLibros");

  //Comprobamos que haya seleccionado un libro y si lo ha echo lo añadimos al textarea.
  //si seleciona la posicion 0, no se añadirá
  //si selecciona la posicion 0, no se añadirá
  if (select.selectedIndex === 0) {
    alert("Seleccione un libro");
  } else {
    textArea.value += `\n El libro añadido: ${
      select.options[select.selectedIndex].text
    }`;
  }
}

/**
 * @description Eliminamos el libro seleccionado del textarea.
 */
function eliminarLibrosTextarea() {
  const textArea = document.getElementById("cestaLibros");
  const select = document.getElementById("selectLibro");

  if (select.selectedIndex === 0) {
    alert("Seleccione un libro");
    return false;
  }

  for (const libro of textArea.value.split("\n")) {
    if (libro.includes(select.options[select.selectedIndex].text)) {
      textArea.value = textArea.value.replace(libro, "");
    }
  }
}

/**
 * @description Calculamos el precio total de la cesta.
 */
function calcularPrecio() {
  const precio = document.getElementById("precioTotal");

  const textArea = document.getElementById("cestaLibros");

  if (textArea.value === "") {
    alert("Debe añadir libros a la cesta");
    return false;
  }

  const numero = [];

  // Dividir las líneas del área de texto
  const lineas = textArea.value.split("\n");

  for (const linea of lineas) {
    // Buscar números en cada línea
    const numerosEnLinea = linea.match(/\d+/g);

    if (numerosEnLinea) {
      for (const numeroEnLinea of numerosEnLinea) {
        const numerillo = parseInt(numeroEnLinea, 10);
        numero.push(numerillo);
      }
    }
  }

  const total = numero.reduce((a, b) => a + b, 0);
  precioTotal.value = total;
}


function init() {
  document
    .getElementById("agregar")
    .addEventListener("click", handlerAgregarLibro);

  document.getElementById("agregar").addEventListener("click", añadirSelect);

  document
    .getElementById("cargarCesta")
    .addEventListener("click", cargarLibrosTextarea);

  document
    .getElementById("cargarCesta")
    .addEventListener("click", calcularPrecio);

  document
    .getElementById("agregarSelect")
    .addEventListener("click", añadirLibrosTextarea);

  document
    .getElementById("eliminarSelect")
    .addEventListener("click", eliminarLibrosTextarea);

  !localStorage.hasOwnProperty("keyLibreria") &&
    insertLibroStructure(keyLibreria, libros);

  !localStorage.hasOwnProperty("keyCesta") &&
    insertLibroStructure(keyCesta, cestalibros);
}

//------------------INICIALIZACION------------------
document.addEventListener("DOMContentLoaded", init);
