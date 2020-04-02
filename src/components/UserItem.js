import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class UserItem extends Component {
  currentId = JSON.parse(localStorage.getItem('user'))._id;

  render() {
    const { firstname, lastname, age } = this.props.user;
    return (
      <Card variant='outlined' style={this.cardStyle}>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {firstname + ' ' + lastname}
          </Typography>
          <Typography color='textSecondary'>{age} years </Typography>
        </CardContent>
        <CardActions>
          {this.props.user._id !== this.currentId ? (
            <Button
              size='small'
              onClick={this.props.delUser.bind(this, this.props.user)}
            >
              Delete
            </Button>
          ) : (
            <Button size='small'>Todo</Button>
          )}
        </CardActions>
      </Card>
    );
  }

  cardStyle = {
    width: '200px'
  };
}

export default UserItem;
