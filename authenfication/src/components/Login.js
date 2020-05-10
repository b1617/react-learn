import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [isFail, setFail] = useState(false);
  const { loginSuccess } = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (data) => {
    const { name, password } = data;
    if (name === 'hello' && password === 'world') {
      loginSuccess();
      history.push('/home');
    } else {
      setFail(true);
    }
  };

  return (
    <div>
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
      {isFail && <p>Fail try : hello world</p>}
    </div>
  );
}
