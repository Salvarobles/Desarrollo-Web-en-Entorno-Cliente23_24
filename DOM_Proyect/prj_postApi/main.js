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
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const postArray = [];
        postArray.push(data);
        renderPost(postList, postArray);
      })
      .catch((err) => {
        throw new Error("Error al hacer el post");
      });

    titlePost.value = "";
    contentPost.value = "";
  });
}

postList.addEventListener("click", (e) => {
  e.preventDefault();

  let editBtnPress = e.target.id == "edit-post";
  let deleteBtnPress = e.target.id == "delete-post";
  const postId = e.target.parentElement.dataset.id;

  const idURL = `http://localhost:4000/posts/${postId}`;

  // Editar card
  if (editBtnPress) {
    e.preventDefault();

    fetch(idURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        titlePost.value = data.title;
        contentPost.value = data.post;
      });

      addPostForm.getAttribute("submit", "Editar Card");

    

    fetch(idURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titlePost.value,
        post: contentPost.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((err) => {
        throw new Error("Error al editar el post");
      });
  }

  // Eliminar Card

  if (deleteBtnPress) {
    e.preventDefault();
    fetch(idURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const postCard = e.target.closest(".card");
        if (postCard) {
          postCard.remove();
        }
      })
      .catch((err) => {
        throw new Error("Error al eliminar el post");
      });
  }
});

//---------------- Inicializar ---------------
document.addEventListener("DOMContentLoaded", init);
