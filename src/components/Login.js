import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { signUp, signIn } from '../apis/User.api';
class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  submit = e => {
    e.preventDefault();
    //    signUp(this.state.email, this.state.password).then(value => {
    //     console.log(value);
    //  });
    signIn(this.state.email, this.state.password).then(user => {
      console.log(user);
      if (user.token) {
        this.props.history.push(`/`);
      }
    });
  };

  onChange = e => {
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
      <form noValidate autoComplete='off' style={this.formStyle}>
        <TextField
          onChange={this.onChange}
          type='email'
          name='email'
          value={this.state.email}
          label='Email'
          variant='outlined'
        />

        <TextField
          style={{ marginTop: '15px' }}
          onChange={this.onChange}
          type='password'
          name='password'
          value={this.state.password}
          label='Password'
          variant='outlined'
        />
        <Button
          onClick={this.submit}
          style={this.btnStyle}
          variant='outlined'
          color='primary'
        >
          Login
        </Button>
      </form>
    );
  }
}

export default Login;
