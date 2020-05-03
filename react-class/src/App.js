import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(
      res => {
        this.setState({
          todos: res.data
        });
      }
    );
  }

  markComplete = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    console.log(id);
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      res => {
        this.setState({
          todos: this.state.todos.filter(todo => todo.id !== id)
        });
      }
    );
  };

  addTodo = title => {
    console.log('add', title);
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => {
        console.log(res);
        this.setState({
          todos: [...this.state.todos, res.data]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  randomId() {
    return Math.random(0, 1);
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              path='/'
              render={props => (
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
            <Route path='/about' />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
