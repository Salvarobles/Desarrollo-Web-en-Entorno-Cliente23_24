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
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titlePost.value,
        post: contentPost.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        data.title = titlePost.value;
        data.post = contentPost.value;
      })
      .catch((err) => {
        throw new Error("Error al editar el post");
      });