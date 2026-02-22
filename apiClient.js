// apiClient.js

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  const res = await fetch(BASE_URL);
  return res.json();
}

async function fetchUserById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}

async function createUser(user) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}

async function updateUser(id, user) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}

async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  // JSONPlaceholder returns an empty object for DELETE in many cases
  return res.json();
}

module.exports = {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
};
