import React from 'react'

const peeps = [
  {
  firstName : "John",
  lastName : "Lucky",
  age : 35,
  hairColor: "Black"
},
  {
  firstName : "Steph",
  lastName : "Curry",
  age : 30,
  hairColor: "Sometimes Bald"
},
  {
  firstName : "John",
  lastName : "Wick",
  age : 90,
  hairColor: "Black"
},
  {
  firstName : "Will",
  lastName : "Smith",
  age : 40,
  hairColor: "Black"
}
]
console.log(peeps)

const SecondComponents = () => {
  return (
    <fieldset>
      <legend>PEEPS</legend>
      <p>name: {peeps[0].firstName}</p>
      <p>last name: {peeps[0].lastName}</p>
      <p>age: {peeps[0].age}</p>
      <p>hair: {peeps[0].hairColor}</p>
      <p>-------------------------------</p>
      <p>name: {peeps[1].firstName}</p>
      <p>last name: {peeps[1].lastName}</p>
      <p>age: {peeps[1].age}</p>
      <p>hair: {peeps[1].hairColor}</p>
      <p>-------------------------------</p>
      <p>name: {peeps[2].firstName}</p>
      <p>last name: {peeps[2].lastName}</p>
      <p>age: {peeps[2].age}</p>
      <p>hair: {peeps[2].hairColor}</p>
      <p>-------------------------------</p>
      <p>name: {peeps[3].firstName}</p>
      <p>last name: {peeps[3].lastName}</p>
      <p>age: {peeps[3].age}</p>
      <p>hair: {peeps[3].hairColor}</p>
    </fieldset>
  )
}

export default SecondComponents

