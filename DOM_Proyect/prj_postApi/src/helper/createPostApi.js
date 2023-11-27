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