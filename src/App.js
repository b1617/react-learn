import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Signin from './components/Signin';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Signup from './components/Signup';

class App extends React.Component {
  state = {
    isLoggedIn: localStorage.getItem('token') ? true : false
  };

  loginHandler = (isLog, params) => {
    console.log(params);
    if (isLog) {
      localStorage.setItem('user', JSON.stringify(params.user));
      localStorage.setItem('token', params.token);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
    this.setState({
      isLoggedIn: isLog
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header
            isLoggedIn={this.state.isLoggedIn}
            loginHandler={this.loginHandler}
          ></Header>
          <Route
            exact
            path='/'
            render={props => (
              <Home {...props} isLoggedIn={this.state.isLoggedIn} />
            )}
          />
          <Route
            path='/signin'
            render={props => (
              <Signin
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                loginHandler={this.loginHandler}
              />
            )}
          />
          <Route path='/about' component={About} />
          <Route
            path='/signup'
            render={props => (
              <Signup
                {...props}
                isLoggedIn={this.state.isLoggedIn}
                loginHandler={this.loginHandler}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
