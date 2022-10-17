import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div>
        <img src={this.props.user.avatar} alt="avatar" />
        <p>{this.props.user.first_name} {this.props.user.last_name}</p>
        <p>{this.props.user.employment.title}</p>
      </div>
    );
  }
}

export default Card;
