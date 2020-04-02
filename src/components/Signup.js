import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './../App.css';
import { signUp } from '../apis/User.api';

class Signup extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    age: '',
    email: '',
    password: ''
  };

  onChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    console.log(this.state);
    signUp(this.state).then(res => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res.user));
      localStorage.setItem('token', res.token);
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div>
        <form className='formStyle' noValidate autoComplete='off'>
          <TextField
            onChange={this.onChange}
            label='Firstname'
            variant='outlined'
            type='text'
            value={this.state.firstname}
            name='firstname'
          />
          <TextField
            onChange={this.onChange}
            label='Lastname'
            variant='outlined'
            type='text'
            value={this.state.lastname}
            name='lastname'
          />
          <TextField
            onChange={this.onChange}
            label='Age'
            variant='outlined'
            type='number'
            value={this.state.age}
            name='age'
          />
          <TextField
            onChange={this.onChange}
            label='Email'
            variant='outlined'
            type='email'
            value={this.state.email}
            name='email'
          />
          <TextField
            onChange={this.onChange}
            label='Password'
            variant='outlined'
            type='password'
            value={this.state.password}
            name='password'
          />
          <Button
            onClick={this.submit}
            className='btnStyle'
            variant='outlined'
            color='primary'
          >
            Signup
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
