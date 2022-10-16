import React, { Component } from 'react';

class Button extends Component {
  handleClick = (event) => {
    event.preventDefault();
    alert(`Clicked ${this.props.input}!`);
  }

  render() {
    return (
      <button onClick={(this.props.type === 'popup') ? this.handleClick : this.props.clickFunction}>Click Me {this.props.input}</button>
    );
  }
}

export default Button;
