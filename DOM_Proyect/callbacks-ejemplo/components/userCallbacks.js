import { users } from "../assets/users";

const userCallbacks = (element) => {
  findUser(1, (user) => {
    element.innerHTML = `<H1>${user.login.username} </h1> <h2>${user.login.password}</h2>`;
  });
};

const findUser = (id, callback) => {
  //buscar en user.js el id y retornacion en 1s
  setTimeout(() => {
    const user = users.find((user) => user.id === id);
    callback(user);
  }, 3000);
};

export default userCallbacks;
