export const pintarPromesas = (component) => {
    getUsersWithPromise()
      .then(users => component.innerHTML =  users.map(user => `<li>${user.firstname}</li>` ))
      .catch(err => component.innerHTML = (err));
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
  
  