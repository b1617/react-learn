import axios from 'axios';
const URL = 'http://localhost:3333/user/';

function signIn(email, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + 'signin', { email, password })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function signUp(params) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + 'signup', params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function deleteUser(params) {
  const token = localStorage.getItem('token');
  const config = {
    data: params,
    headers: { Authorization: `Bearer ${token}` }
  };
  return new Promise((resolve, reject) => {
    axios
      .delete(URL, config)
      .then(res => {
        if (res.status === 200) {
          resolve(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getUsers() {
  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return new Promise((resolve, reject) => {
    axios
      .get(URL, config)
      .then(res => {
        if (res.status === 200) {
          resolve(res.data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export { signIn, signUp, getUsers, deleteUser };
