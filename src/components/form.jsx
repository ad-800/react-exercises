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
    alert(`Hello ${this.state.firstName} ${this.state.lastName}!`)
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>First Name
          <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <label>Last Name
          <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <input className="button" type="submit" value="Greet Me" />
      </form>
    );
  }
}

export default Button;
