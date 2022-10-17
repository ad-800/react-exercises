import React, { Component } from 'react';

class StyledComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.joke.setup}</h1>
        <p>{this.props.joke.punchline}</p>
      </div>
    )
  }
}

export default StyledComponent;
