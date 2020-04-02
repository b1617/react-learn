import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { signIn } from '../apis/User.api';
import './../App.css';
class Signin extends React.Component {
  state = {
    email: '',
    password: ''
  };

  submit = e => {
    e.preventDefault();
    signIn(this.state.email, this.state.password).then(res => {
      const { user, token } = res;
      if (user && token) {
        this.props.loginHandler(true, { user, token });
        this.props.history.push(`/`);
      }
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form noValidate autoComplete='off' className='formStyle'>
        <TextField
          onChange={this.onChange}
          type='email'
          name='email'
          value={this.state.email}
          label='Email'
          variant='outlined'
        />

        <TextField
          onChange={this.onChange}
          type='password'
          name='password'
          value={this.state.password}
          label='Password'
          variant='outlined'
        />
        <Button
          className='btnStyle'
          onClick={this.submit}
          variant='outlined'
          color='primary'
        >
          Login
        </Button>
      </form>
    );
  }
}

export default Signin;
