export function updatePostApi(url, updateData, callback) {
  fetch(` ${url}/${updateData.id} `, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  })
    .then((reponse) => {
      if (!reponse.ok) {
        throw new Error("Error actualizar", reponse.statusText);
      }
      return updateData;
    })
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      console.log("Error updated", err);
    });
}
