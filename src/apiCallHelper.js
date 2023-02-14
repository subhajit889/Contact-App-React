const Api_url = "https://jsonplaceholder.typicode.com/users";

// Getting all users
export const getAllUsersAPI = () => {
  return fetch(Api_url, { method: "GET" }).then((response) => response.json());
};
// creating new user
export const createUserAPI = (body) => {
  return fetch(Api_url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
// updating user
export const updateUserAPI = (body, id) => {
  return fetch(`${Api_url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

// deleting user
export const deleteUserAPI = (id) => {
  return fetch(`${Api_url}/${id}`, {
    method: "DELETE",
  });
};