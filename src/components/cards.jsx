import React, { Component } from 'react';
import Card from './card'

class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    }
  }

  componentDidMount() {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then(result => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            users: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='cards-container'>
          {users.map(user => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      )
    }
  }
}

export default Cards;
