import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
  return props.todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      deleteTodoHandler={props.deleteTodo}
      markTodoHandler={props.markTodo}
    ></TodoItem>
  ));
}
