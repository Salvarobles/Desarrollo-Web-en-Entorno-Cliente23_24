//------------- Imports ----------------------------

import { renderPost } from "./src/components/renderPost/renderPost";
const URL = `${import.meta.env.VITE_URL}/posts`;

//------------- Varibles Grobales --------------------

const postList = document.querySelector(".posts-list");
const addPostForm = document.querySelector(".add-post-form");

const titlePost = document.querySelector("#title-post");
const contentPost = document.querySelector("#content-post");

//------------- Funciones ---------------------------

function init() {
  // Traer los post
  // Metodo: POST
  fetch(URL)
    .then((response) => response.json())
    .then((data) => renderPost(postList, data))
    .catch((err) => {
      throw new Error("Error al hacer el post");
    });

  addPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Realizamos el post del formulario
    // Metodo: POST
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: null,
        title: titlePost.value,
        post: contentPost.value,
      })
    })
    .then(response => response.json())
    .then(data => {
      const postArray = [];
      postArray.push(data);
      renderPost(postList, postArray);
    })
    .catch(err => {
      throw new Error("Error al hacer el post");
    })
  });
}

postList.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.id);
  let editBtnPress = e.target.id = "edit-post";
  let deleteBtnPress = e.target.id = "delete-post";

  console.log(e.target.parentElement.dataset.id);

})


//---------------- Inicializar ---------------
document.addEventListener("DOMContentLoaded", init);
