import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    return this.setState({item: event.target.value})
  }

  renderList = () => {
    return this.props.items.map((item, index) => {
      return <li key={index}>{item}</li>
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button type="button" onClick={() => this.props.handleSubmit(this.state.item)} >
          Add
        </button>
      <ul className='left-centered'>
        {this.renderList()}
      </ul>
      </div>
    );
  }
}

export default List;
