import React, { Component } from 'react';
import StyledComponent from './styled-component';

class StyledList extends Component {
  renderJokes = () => {
    return this.props.data.map(joke => {
      return <StyledComponent joke={joke} key={joke.id} />
    })
  }
  render() {
    return (
      <div className='cards-container'>
        {this.renderJokes()}
      </div>
    )
  }
}

export default StyledList;
