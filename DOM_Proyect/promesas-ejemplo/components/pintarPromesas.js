import { users } from "../assets/users";

/**
 * @param {HTMLDivElement} elemnt
 */
const pintarPromesas = (element) => {
  findUser(1)
    .then(user =>element.innerHTML = `El usuario: ${user.id} es incorrecto`)
    })
    .catch(user => element.innerHTML = user)

};

const findUser = (id, callback) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      resolve(`El usuario: ${user.id} es correcto`); 
    }
    reject(`El usuario: ${user.id} es incorrecto`);

  });

};



export default pintarPromesas;
