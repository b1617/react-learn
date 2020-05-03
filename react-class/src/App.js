import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Hello',
        completed: false
      },
      {
        id: 2,
        title: 'World',
        completed: true
      },
      {
        id: 3,
        title: 'Foo',
        completed: false
      },
      {
        id: 5,
        title: 'Bar',
        completed: true
      },
      {
        id: 6,
        title: 'End',
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  };

  addTodo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos[this.state.todos.length - 1].id + 1,
          title,
          completed: false
        }
      ]
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  ></Todos>
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
