export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});

export const addUserAsync = (user) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addUser(data));
      })
      .catch((error) => console.log(error));
  };
};
