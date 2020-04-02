import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Header extends Component {
  logout = () => {
    localStorage.clear();
    this.props.loginHandler(false, {});
  };

  navBtn = {
    textDecoration: 'none',
    color: '#ffffff'
  };
  renderAuthButton = () => {
    if (!this.props.isLoggedIn) {
      return (
        <div>
          <Link to='/signin' style={this.navBtn}>
            <Button color='inherit'>Login</Button>
          </Link>
          <Link to='/signup' style={this.navBtn}>
            <Button color='inherit'>Signup</Button>
          </Link>
        </div>
      );
    } else {
      return (
        <Button color='inherit' onClick={this.logout}>
          Logout
        </Button>
      );
    }
  };

  render() {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              <Link to='/' style={this.navBtn}>
                Home
              </Link>
            </Typography>
            {this.renderAuthButton()}
            <Link to='/about' style={this.navBtn}>
              <Button color='inherit'>About</Button>
            </Link>{' '}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
