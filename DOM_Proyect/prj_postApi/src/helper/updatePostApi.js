
function updatePostApi(url, postId, callback){
    fetch(`${url}/${postId}`, {
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
    
}
