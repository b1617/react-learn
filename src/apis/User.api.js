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

export { signIn, signUp };
