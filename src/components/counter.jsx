import React, { Component } from 'react';
import Button from './button'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <p>You clicked this button: {this.state.count} times</p>
        <Button input='' clickFunction={() => this.setState({count: 1 + this.state.count})}/>
      </div>
    );
  }
}

export default Counter;
