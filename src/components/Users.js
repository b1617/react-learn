import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  render() {
    return this.props.users.map(user => (
      <UserItem
        user={user}
        key={user._id}
        delUser={this.props.delUser}
      ></UserItem>
    ));
  }
}

export default Users;
