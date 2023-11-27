export function getPostApi(url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.message);
            }
        return response.json()
        })
        .then(data => callback(data))
        .catch(err => console.error(err));
}