import './App.css';
import React, { useState } from "react";


function App() {
  const [people, setPeople] = useState([
    {
      name: "John",
      lastName: "Doe",
      age: 30,
      favouriteFood: "Pizza",
      favouriteColour: "Red",
      counter: 0,
    },
  ]);
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");

  return (
    <div className="App">
      <h1>Universidad Tecnologica De Aguascalientes</h1>
      <br />
      <input
        className='name'
        type="text"
        name="name"
        placeholder='Ingresa tu Nombre'

        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        className='lastn'
        type="text"
        name="lastName"
        placeholder='Ingresa tu Apellido'
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
      <br /><br />
      <button className='agregar'
        onClick={() => {
          setPeople((current) => [{ name, lastName }, ...current]);
        }}
      >
        Add user
      </button>

      <hr className='espacio' />
      <h2>Tabla de Usuarios</h2>

      <ul >
        {people.map((person, idx) => (
          <li className='tabla' id={idx}>{`${person.name} ${person.lastName}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;