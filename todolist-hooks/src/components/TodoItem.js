import React from 'react';

export default function TodosItem(props) {
  const getStyle = () => {
    return {
      background: '#f3f3f3',
      padding: '10px',
      borderBottom: '1px #ccc',
      textDecoration: props.todo.completed ? 'line-through' : 'none'
    };
  };

  const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px',
    width: '25px',
    marginLeft: '15px',
    borderRadius: '3px',
    cursor: 'pointer',
    float: 'right'
  };
  const { id, title } = props.todo;
  return (
    <div style={getStyle()}>
      <p>
        <input
          type='checkbox'
          onChange={props.markTodoHandler.bind(null, id)}
        ></input>{' '}
        {title}
        <button
          style={btnStyle}
          onClick={props.deleteTodoHandler.bind(null, id)}
        >
          X
        </button>
      </p>
    </div>
  );
}
