import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const [valor, setValor] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!!name) {
      fetch(`https://kalapan.herokuapp.com/productos?codigo=${name}`)
      .then(response => response.json())
      .then(data => {
        setValor(data)
        setName("")
      })
    }
  }

  const resultValues = () => {
    let label = <h1></h1>
    for (let value in  valor) {
      label = <><h1>{valor[value].nombre}</h1><h1>$ {valor[value].valor_venta}</h1></>
    }
    return (label)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kalapan</h1>
        <form onSubmit={handleSubmit}>
          <label>Cod de barras 
            <input 
              type="text"
              onChange={(e) => setName(e.target.value)}
              name='codigo'
              value={name}
            />
          </label>
          <input type="submit" value='Consultar'/>
        </form>
        <div>{ resultValues()} </div>
      </header>
    </div>
  );
}

export default App;
