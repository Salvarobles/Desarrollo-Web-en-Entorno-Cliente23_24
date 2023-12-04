# Apuntes TEMA 5

## DOM

* Para buscar un elemento ID.

```js
let titulo = document.getElementById('titulo');
```

* Para buscar un cualquier elemento.

```js
let titulo2 = document.querySelector('.titulo-2');
```

* Añadir o quitar atributos a un elemento y declarar clases.

```js
let imgLogo = document.querySelector("img");
imgLogo.setAttribute("src","/javascript.svg");
imgLogo.removeAttribute("src","/javascript.svg");
imgLogo.classList.add("new-class");
imgLogo.classList.remove("new-class");
```

* Añadir contenido a un elemento. 

```js
const div = document.getElementById("miDiv");
div.innerHTML = "<em>Nuevo contenido HTML</em>";
div.textContent = "Nuevo contenido de texto";
```
* Añadir un elemento al final de otro elemento. 
```js
const lista = document.getElementById("miLista");
const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 3";
lista.appendChild(nuevoElemento);
```

## Operacion asincrona

```js
console.log("Inicio");
setTimeout(() => {
  console.log("Hola Salva. Ejecutando después de 2 segundos");
}, 2000);
console.log("Fin");
```
## Promesas

* Se declaran asi 
```js
return new Promise((resolve, reject) =>{
    setTimeout(() => {
    const exito = true;
    if (exito) {
      resolve("La Promesa se ha cumplido.");
    } else {
      reject("La Promesa ha sido rechazada.");
    }
  }, 2000);
})
```
* Para utilizar una promesa

```js
miPromesa.then((resultado) => {
  console.log("Resultado:", resultado);
});
miPromesa.catch((err) => {
  console.log("Error de:", err);
});
```

## Async/Await

Async/Await cuando declaramos el async significa que esa funcion va a ser asincrona y siempre que tiene un async tiene un await. El await es la pausa de ejecución hasta que la promesa se resuelva.
```js
async function realizarTareas() {
  try {
    const resultado1 = await realizarTarea1();
    const resultado2 = await realizarTarea2(resultado1);
    const resultado3 = await realizarTarea3(resultado2);
    console.log("Todas las tareas han sido completadas.");
  } catch (error) {
    console.error("Algo salió mal:", error);
  }
}

realizarTareas();
```

Utilizando con fetch

```js
async function obtenerDatosDesdeAPI() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos");
    }

    const datos = await response.json();
    console.log("Datos desde la API:", datos);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerDatosDesdeAPI();
```

## Fetch 

```js
export function loadPokemons(callback) {
  fetch("http://localhost:4000/pokemonObj")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fallo al fetchear");
      }
      return response.json();
    })
    .then((data) => callback(data))
    .catch((err) => console.error(err.message));
}
```

## CRUD 

* Para crear informacion

 Se usa POST para crear informacion.

```js
export function createPostApi(url, postData, callback) {
    fetch(url, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(postData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error post data");
            }
            return response.json();
        })
        .then(data => callback(data))
        .catch(err => console.log("error al añadir el post", err));
}
```

* Para eliminar informacion

Se usa DELETE para eliminar informacion.

```js
export function deletePostApi(url, postId, callback) {

    fetch(`${url}/${postId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            callback();
        })
        .catch(err => console.log("Error al eliminar: ", err)); 
}
```
* Para actualizar informacion

Se usa PUT para actualizar informacion.

```js
export function updatePostApi(url, updateData, callback) {
  fetch(` ${url}/${updateData.id} `, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  })
    .then((reponse) => {
      if (!reponse.ok) {
        throw new Error("Error actualizar", reponse.statusText);
      }
      return updateData;
    })
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      console.log("Error updated", err);
    });
}
```
