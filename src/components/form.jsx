import React, { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <form className="form" onSubmit={() => alert(`Hello ${this.state.firstName} ${this.state.lastName}!`)}>
      <label>First Name
        <input name="firstName" type="text" value={firstName} onChange={() => setFirstName} />
      </label>
      <label>Last Name
        <input name="lastName" type="text" value={lastName} onChange={() => setLastName} />
      </label>
      <input className="button" type="submit" value="Greet Me" />
    </form>
  );
}

export default Form;
