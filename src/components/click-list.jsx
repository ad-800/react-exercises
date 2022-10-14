import React, { Component } from 'react';
import Button from './button'

class ClickList extends Component {
  handleClick = (event) => {
    event.preventDefault();
    alert(`Clicked ${this.props.input}!`);
  }

  render() {
    return (
      <div>
        {this.props.buttons.map(button => <Button input={button} key={button} onClick={this.handleClick()} />)}
      </div>
    );
  }
}

export default ClickList;
