/**
 * @param {HTMLDivElement} elemnt
 */
const pintarPromesas = (element, city) => {
    // getUsersWithPromise()
    // .then(users => element.innerHTML =  users.map(user => {
    //     if (user.address.city == city){
    //        `Este usuario pertanece a ${user.firstname}` 
    //     }
    // }))
    // .catch(err => element.innerHTML = (err));

    getUsersWithPromise()
    .then(users => element.innerHTML =  users.map(user => user.firstname == city ? 0 :`<li>${user.email}</li>` ))
    .catch(err => element.innerHTML = (err));
};

function getUsersWithPromise() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.org/users")
        .then(response => {
            if (response.ok){
                return response.json();
            } else {
                reject(new Error("No puedo devolver la data"));
            }
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
  });
}

function getWeatherWithPromise() {
  return new Promise((resolve, reject) => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIkey}")
        .then(response => {
            if (response.ok){
                return response.json();
            } else {
                reject(new Error("No puedo devolver la data"));
            }
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
  });
}
  

export default pintarPromesas;
