import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f3f3f3',
      padding: '10px',
      borderBottom: '1px #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          ></input>{' '}
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
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
export default TodoItem;
