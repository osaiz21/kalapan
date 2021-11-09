import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { render } from '@testing-library/react';

function App() {
  const [name, setName] = useState("")
  const [valor, setValor] = useState([])
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

    const td = valor.map(value => {
      return `<td><h4>${value.nombre} - ${value.descripcion}</h4></td> <td><h4>$ &nbsp;${value.valor_venta}</h4></td>`
    })
    const tableGeneral = `<br><table border=1><tr>${td.join('</tr></tr>')}</table>`
    return <div dangerouslySetInnerHTML={{__html: tableGeneral}}></div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kalapan</h1>
        <form onSubmit={handleSubmit}>
          <label>Cod de barras &nbsp;
            <input 
              type="text"
              onChange={(e) => setName(e.target.value)}
              name='codigo'
              value={name}
              autoFocus
            />
            &nbsp;
          </label>
          <input type="submit" value='Consultar'/>
        </form>
        <div>{ resultValues()} </div>
      </header>
    </div>
  );
}

export default App;
