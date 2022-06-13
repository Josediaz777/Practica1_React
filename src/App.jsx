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
  //Const Calculadora
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResult] = useState(0);



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
      <br /><br />      <br /><br /><br /><br /><b></b>

      <button className='agregar'
        onClick={() => {
          setPeople((current) => [{ name, lastName }, ...current]);
        }}
      >
        Agregar Usuario
      </button>

      <br /><br /><br /><br /><b></b>

      <hr className='espacio' />
      <h2>Tabla de Usuarios</h2>

      <ul >
        {people.map((person, idx) => (
          <li className='tabla' id={idx}>{`${person.name} ${person.lastName}`}</li>
        ))}
      </ul>
      <br />
      <hr />
      <div className=''><h2>CALCULADORA</h2></div>
      <div>
        <input
          type="number"
          name="Número 1"
          className='name'
          placeholder='Ingresa el numero 1'
          onChange={(event) => {
            setNumero1(event.target.value);
          }}
        />
        <input
          type="number"
          name="Número 2"
          className='name'
          placeholder='Ingresa el numero 2'
          onChange={(event) => {
            setNumero2(event.target.value);
          }}
        />
        <h3>Resultado: {resultado}</h3>
      </div>
      <div className='padding-bottom'>
        <button
          onClick={() => {
            setResult(((+numero1) + (+numero2)));
          }}
          className='operacion'
        >
          Sumar
        </button>
        <button
          onClick={() => {
            setResult(((+numero1) - (+numero2)));
          }}
          className='operacion'

        >
          Resta
        </button>
        <button
          onClick={() => {
            setResult(((+numero1) * (+numero2)));
          }}
          className='operacion'
        >
          Multiplicar
        </button>
        <button
          onClick={() => {
            if (numero2 == 0) {
              window.alert('No es posible dividir entre 0, Ingresa un número válido')
              return;
            }
            setResult(((+numero1) / (+numero2)));
          }}
          className='operacion'
        >
          Dividir
        </button>
      </div>
      {/* <p>{resultado}</p> */}
    </div>




  );
}

export default App;