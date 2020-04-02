import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
}));


function Header() {
  const classes = useStyles();
  const token = localStorage.getItem('token');
  const clearLocalStorage = () => localStorage.clear();
  const renderAuthButton = () => {
    if (!token) {
      return (
        <div>
          <Link to='/signin' className={classes.link}>
            <Button color='inherit'>Login</Button>
          </Link>
          <Link to='/signup' className={classes.link}>
            <Button color='inherit'>Signup</Button>
          </Link>
        </div>
      );
    } else {
      return (
        <Button color='inherit' onClick={clearLocalStorage}>
          Logout
        </Button>
      );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link to='/' className={classes.link}>
              Home
            </Link>
          </Typography>
          {renderAuthButton()}
          <Link to='/about' className={classes.link}>
            <Button color='inherit'>About</Button>
          </Link>{' '}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
