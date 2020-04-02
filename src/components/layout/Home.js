import React from 'react';
import Users from './../Users';
import { getUsers, deleteUser } from './../../apis/User.api';

class Home extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      getUsers().then(users => {
        console.log(users);
        this.setState({
          users
        });
      });
    }
  };

  delUser = user => {
    deleteUser(user).then(() => {
      console.log('cannot', this.state);
      this.setState({
        users: [...this.state.users].filter(u => u._id !== user._id)
      });
    });
  };

  renderUser = () => {
    if (this.props.isLoggedIn) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Users users={this.state.users} delUser={this.delUser}>
            {' '}
          </Users>
        </div>
      );
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <p> Welcome to the home page :)</p>
        {this.renderUser()}
      </div>
    );
  }
}
export default Home;
