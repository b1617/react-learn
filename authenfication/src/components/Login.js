import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFail, setFail] = useState(false);
  const { loginSuccess } = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === 'hello' && password === 'world') {
      loginSuccess();
      history.push('/home');
    } else {
      setFail(true);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' />
      </form>
      {isFail && <p>Fail try : hello world</p>}
    </div>
  );
}
