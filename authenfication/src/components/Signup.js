import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const onSubmit = (data) => {
    const { name, email, password } = data;
    sessionStorage.setItem(name, password);
    login();
    history.push('/home');
  };

  return (
    <div className='signup'>
      <h3 style={{ textAlign: 'center' }}> SIGN UP</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          ref={register({ required: true })}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          ref={register({ required: true })}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          ref={register({ required: true })}
        />
        <input type='submit' value='Register' />
      </form>
    </div>
  );
}
