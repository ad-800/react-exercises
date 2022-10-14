import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>Click Me {this.props.input}</button>
    );
  }
}

export default Button;
