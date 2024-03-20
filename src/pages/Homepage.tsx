import React, { useState } from "react";

function HouseHold({ kitchen }) {
  return (
    <>
      {kitchen.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
    )
  
  
}



const HomePage = () => {
  const [name] = useState({
    person: "Nimo",
    Age: "20"
  })
  const [age, setAge] = useState(false)


  function addAge() {
    setAge(true)
  }
  
  return (
    <>
      <h1 className="font-bold text-5xl">My name is {name.person}</h1>
      {age ? <p>I am {name.Age} years old</p> : null}
      <button onClick={addAge}>Age</button>
      <HouseHold kitchen = {["A", "B", "C"]} />
    </>
  );
};

export default HomePage
