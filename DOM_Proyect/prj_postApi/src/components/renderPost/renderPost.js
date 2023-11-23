//Import
import "./style.css";
//Variables groblales || cuidado esta variable no se limpia cuanndo hace el get
let divPost = "";
/**
 *
 * @param {HTMLDivElement} element
 * @param {<Object>post} posts
 */
export const renderPost = (element, posts) => {
  //Funcion que va a pintar en el element el objeto post,
  //Usando card de boostrap

  posts.forEach((post) => {
    divPost += `
        <div class="card mx-3 bg-light" style="width: 18rem;">
            <div class="card-body" data-id=${post.id}>
            <h5 class="card-title">${post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
            Post Numero ${post.id}</h6>
            <p class="card-text">
            ${post.post}
            </p>
            <a href="#" class="card-link" id="edit-post">Editar Post</a>
            <a href="#" class="card-link" id="delete-post">Borrar Post</a>
            </div>
        </div>`;
  });

  element.innerHTML = divPost;
};
