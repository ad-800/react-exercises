import React, { Component } from 'react';
import Button from './button'

class ClickList extends Component {
  render() {
    return (
      <div>
        {this.props.buttons.map(button => <Button input={button} key={button} type='popup' />)}
      </div>
    );
  }
}

export default ClickList;
