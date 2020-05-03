import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Coucou',
      completed: false
    },
    {
      id: 2,
      title: 'Salut',
      completed: false
    }
  ]);

  const addTodo = (title) => {
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
  };

  console.log(todos);
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <AddTodo addTodo={addTodo}></AddTodo>
        <Todos todos={todos}> </Todos>
      </div>
    </div>
  );
}

export default App;
