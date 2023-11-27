//------------- Imports ----------------------------

import { renderPost } from "./src/components/renderPost/renderPost";
import { createPostApi } from "./src/helper/createPostApi";
import { deletePostApi } from "./src/helper/deletePostApi";
import { getPostApi } from "./src/helper/getPostApi";
const URL = `${import.meta.env.VITE_URL}/posts`;

//------------- Varibles Grobales --------------------

const postList = document.querySelector(".posts-list");
const addPostForm = document.querySelector(".add-post-form");

const titlePost = document.querySelector("#title-post");
const contentPost = document.querySelector("#content-post");

//------------- Funciones ---------------------------

function init() {
  // Traerme todos los post de mi api.
  getPostApi(URL, (data) => {
    renderPost(postList, data);
  });
}

addPostForm.addEventListener("submit", (e) => {
  // esoty escuchando el evento submit del formulario.
  e.preventDefault();
  // const target = e.target;

  const button = addPostForm.querySelector(".btn");
  // compruebo que los campos tenga campos
  if (!(titlePost.value && contentPost.value)) {
    alert("Los campos deben de estar con informacion");
    return;
  }

  if(button.classList.contains("btn-secondary")){
    // esstoy editando
    const idEdit = button.dataset.id;
    //Accedo a la Api y actualizo el campo de dicho id
    

    //modifico el dom
    
    return;
  }

  const postData = {
    id: null,
    title: titlePost.value,
    post: contentPost.value,
  };

  createPostApi(URL, postData,(data) => {
    renderPost(postList,[data]);
  });

  e.target.reset();
});

postList.addEventListener("click", (e) => {
  e.preventDefault();

  let editBtnPress = e.target.id == "edit-post";
  let deleteBtnPress = e.target.id == "delete-post";
  const postId = e.target.parentElement.dataset.id;
  const card = e.target.closest(".card");

  // Eliminar card
  if (deleteBtnPress) {
    deletePostApi(URL, postId, () => {
      // ahora busco en el dom el elemento con ID --> postId y lo remove()
      card.remove();
    });
    return;
  }

  // Editar card
  if (editBtnPress) {
    const button = addPostForm.querySelector(".btn");
    button.classList.add("btn-secondary");

    button.textContent = "Editar Post";
    
    button.dataset.id = postId;
    
    const titleCardEdit = card.querySelector(".card-title");
    const textCardEdit = card.querySelector(".card-text");

    titlePost.value = titleCardEdit.textContent.trim();
    contentPost.value = textCardEdit.textContent.trim();

  }

  // Eliminar Card
});

//---------------- Inicializar ---------------
document.addEventListener("DOMContentLoaded", init);
