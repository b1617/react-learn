import React, { useState } from 'react';

export default function AddTodo(props) {
  const [todo, setTodo] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('event &', e);
    props.addTodo(todo);
  };

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={onSubmit}>
      <input
        type='text'
        onChange={onChange}
        name='title'
        style={{ flex: '10', padding: '5px' }}
        placeholder='Add Todo'
      />
      <input type='submit' value='Submit' className='btn' style={{ flex: 1 }} />
    </form>
  );
}
