export const sendDataToServer = (user) => {
  return fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error while sending data to server");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
