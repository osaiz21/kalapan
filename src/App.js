import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const [valor, setValor] = useState("")
  const handleSubmit = (event) => {
    // event.preventDefault();
    // fetch(`http://localhost:3000/productos?codigo_barras=${name}`)
    // .then(response => response.json())
    // .then(data => setValor(data))
    // console.error(valor)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Kalapan</code>
        </p>
        <form onSubmit={handleSubmit}>
          <label>Codigo de barras
            <input 
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
