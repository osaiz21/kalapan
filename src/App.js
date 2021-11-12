import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'


const  App = () => {
  const endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:3005/': 'https://kalapan.herokuapp.com/'

  const [valor,setValor] = useState([]);
  const [name, setName] = useState("");
  const [dataGeneral, setGeneral] = useState({})
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if(!!name) {
        const response  = await fetch(`${endpoint}productos?codigo=${name}`)
        const data = await response.json()
        setValor(data)
        setName('')
      }
    }catch(error){
      console.error(error.stack || error.message)
    }
  }

  const search = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kalapan</h1>
          <form onSubmit={handleSubmit}>
            <label>Cod de barras &nbsp;
              <input 
                type="text"
                onChange={(val) => {setName(val.target.value)}}
                name='codigo'
                value={name}
                autoFocus
              />
              &nbsp;
            </label>
            <input type="submit" value='Consultar'/>
          </form>
          <ol>
            {
              valor.map( (value,i) => {
                return <li key={i}>{value.nombre} {value.descripcion} - $ {value.valor_venta}<hr></hr></li>
              })
            }
          </ol>
        </header>
      </div>
    )
  }
  const handleSubmitProductos = async (e) => {
    e.preventDefault()
    try{
      const result = await fetch(`${endpoint}productos`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(dataGeneral)
      })
      const output = await result.json()
      document.getElementById('form_productos').reset()
    }catch(error){
      alert(error.message || error.stack)
    }

  }
  const assigValProducts = (e) => {
    setGeneral((key) => { 
      return { 
        ...key, 
        [e.target.name]: e.target.value
      }
    })
  }

  const register = () => {
    return (
      <>
      <form onSubmit={handleSubmitProductos} id='form_productos'>
              <input 
                type="text"
                onChange={assigValProducts}
                name='nombre'
                placeholder='nombre'
              />
              <hr></hr>
              <input 
                type="text"
                onChange={assigValProducts}
                name='descripcion'
                placeholder='descripcion'
              />
              <hr></hr>
              <input 
                type="text"
                onChange={assigValProducts}
                name='valor_venta'
                placeholder='valor_venta'
              />
              <hr></hr>
              <input 
                type="text"
                onChange={assigValProducts}
                name='valor_sugerido'
                placeholder='valor_sugerido'
              />
              <hr></hr>
              <input 
                type="text"
                onChange={assigValProducts}
                name='valor_unitario'
                placeholder='valor_unitario'
              />
              <hr></hr>
              <input 
                type="text"
                onChange={assigValProducts}
                name='categoria'
                placeholder='categoria'
              />
              <hr></hr>
              <input 
                type="text"
                onChange={assigValProducts}
                name='tarifa_iva'
                placeholder='tarifa_iva'
              />
              <hr></hr>
              <input 
                type="text"
                onChange={assigValProducts}
                name='cantidad'
                placeholder='cantidad'
              />
              <hr></hr>
              <input 
                type="text"
                onChange={assigValProducts}
                name='proveedor'
                placeholder='proveedor'
              />
              <hr></hr> <input 
                type="number"
                onChange={assigValProducts}
                name='activo'
                placeholder='activo'
                value='1'
              />
              <hr></hr> <input 
                type="text"
                onChange={assigValProducts}
                name='codigo_barras'
                placeholder='codigo_barras'
              />
              <hr></hr>
              <input 
                type="date"
                onChange={assigValProducts}
                name='fecha_vencimiento'
                placeholder='fecha_vencimiento'
              />
            <input type="submit" value='Enviar'/>
          </form>
      </>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={search()}/>
        <Route path='/register' element={register()}/> 
      </Routes>
    </Router>
  )
}

export default App;
