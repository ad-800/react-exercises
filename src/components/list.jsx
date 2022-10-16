import React, { Component } from 'react';

class List extends Component {
  renderList = () => {
    return this.props.items.map((item, index) => {
      return <li key={index}>{item}</li>
    })
  }

  render() {
    return (
      <ul className='left-centered'>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
