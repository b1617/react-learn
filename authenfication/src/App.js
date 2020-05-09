import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <div className='App'>
        <AuthProvider>
          <Route exact path='/' component={About} />
          <PrivateRoute exact path='/home' component={Home} />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
