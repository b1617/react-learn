import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [isFail, setFail] = useState(false);
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (data) => {
    const { name, password } = data;
    if (
      (name === 'hello' && password === 'world') ||
      checkSessionStorage(name, password)
    ) {
      login();
      history.push('/home');
    } else {
      setFail(true);
    }
  };

  const checkSessionStorage = (name, password) => {
    return sessionStorage.getItem(name) === password;
  };

  return (
    <div className='login'>
      <h3 style={{ textAlign: 'center' }}>SIGN IN</h3>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          ref={register({ required: true })}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          ref={register({ required: true })}
        />
        <input type='submit' value='Submit' />
      </form>
      {isFail && <p style={{ textAlign: 'center' }}>Fail try : hello world</p>}
    </div>
  );
}
