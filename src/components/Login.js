import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '5%'
  };

  btnStyle = {
    marginTop: '15px',
    width: '225px'
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        noValidate
        autoComplete='off'
        style={this.formStyle}
      >
        <TextField
          onChange={this.onChange}
          id='outlined-basic'
          type='email'
          name='email'
          value={this.state.email}
          label='Email'
          variant='outlined'
        />

        <TextField
          style={{ marginTop: '15px' }}
          onChange={this.onChange}
          id='outlined-basic'
          type='password'
          name='password'
          value={this.state.password}
          label='Password'
          variant='outlined'
        />
        <Button style={this.btnStyle} variant='outlined' color='primary'>
          Login
        </Button>
      </form>
    );
  }
}

export default Login;
