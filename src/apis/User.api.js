import axios from 'axios';
const URL = 'http://localhost:3333/user/';

async function signIn(email, password) {
  try {
    const response = await axios.post(URL + 'signin', { email, password });
    const data = await response.data;
    return data;
  } catch (err) {
    return err;
  }
}

function signUp(email, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(URL + 'signup', { email, password })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export { signIn, signUp };
