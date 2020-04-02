import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Signin from './components/Signin';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Signup from './components/Signup';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header></Header>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/about' component={About} />
          <Route path='/signup' component={Signup} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
