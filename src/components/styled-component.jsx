import React, { Component } from 'react';

class StyledComponent extends Component {
  render() {
    return (
      <div className='cards'>
        <h2>{this.props.joke.setup}</h2>
        <p>{this.props.joke.punchline}</p>
      </div>
    )
  }
}

export default StyledComponent;
