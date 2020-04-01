import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Login from './components/Login';
import Home from './components/layout/Home';
import About from './components/layout/About';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header></Header>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
