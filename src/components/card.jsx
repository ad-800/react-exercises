import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className='profile-cards'>
        <img src={this.props.user.avatar} alt="avatar" />
        <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
        <p>{this.props.user.employment.title}</p>
      </div>
    );
  }
}

export default Card;
