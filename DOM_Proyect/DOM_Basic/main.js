
let titulo = document.getElementById('titulo');
console.log(titulo);

// let titulo2 = document.getElementsByClassName('titulo-2');
// console.log(titulo2[0]);

let titulo2 = document.querySelector('.titulo-2'); //unico
console.log(titulo2);

let lista = document.querySelectorAll("ul.lista-tareas > li");
console.log(lista);


lista[0].textContent = 'HOLA MUNDO';

lista[1].innerHTML = 'Correccion <em> Github </em>'

let lista2 = document.querySelectorAll("ul.lista-tareas > li:nth-child(2)");

console.log(lista2);

let imgLogo = document.querySelector("img");

imgLogo.setAttribute("src","/javascript.svg");

imgLogo.classList.add("new-class");