import React, { useState } from 'react';

function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <form className="form" onSubmit={() => alert(`Hello ${firstName} ${lastName}!`)}>
      <label>First Name
        <input name="firstName" type="text" onChange={(event) => setFirstName(event.target.value)} />
      </label>
      <label>Last Name
        <input name="lastName" type="text" onChange={(event) => setLastName(event.target.value)} />
      </label>
      <input className="button" type="submit" value="Greet Me" />
    </form>
  );
}

export default Form;
