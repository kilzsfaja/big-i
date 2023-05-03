import React from 'react'


const Peeps = props => {
  return (
    <fieldset>
    <legend>PEEPS</legend>
    <p>name: {props.firstName}</p>
    <p>last name: {props.lastName}</p>
    <p>age: {props.age}</p>
    <p>hair: {props.hairColor}</p>
  </fieldset>
  );
}

export default Peeps;

