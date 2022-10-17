import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  handleSubmit = (event) => {
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`)
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
        <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
        <input type="submit" value="Greet Me" />
      </form>
    );
  }
}

export default Button;
