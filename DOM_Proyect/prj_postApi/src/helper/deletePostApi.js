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