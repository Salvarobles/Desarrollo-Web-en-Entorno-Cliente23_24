export const pintarAsyncAwait = async (component) => {
  const users = await getUsersWithAsyncAwait();

  component.innerHTML = users.map(
    (user) =>
      `<li>${user.login.username}, ${user.login.password}, ${user.address.city}</li>`
  );
};

async function getUsersWithAsyncAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.org/users");
    if (!response.ok) {
      throw new Error("No he conseguido usuarios");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
