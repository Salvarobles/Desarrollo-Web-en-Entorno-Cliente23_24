/**
 * @param {HTMLDivElement} elemnt
 */
const pintarPromesas = (element) => {

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
    fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
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
