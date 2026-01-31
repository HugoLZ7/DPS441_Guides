import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numero, setNumero] = useState(1)
  const [limite, setLimite] = useState(10)
  const [resultado, setResultado] = useState([])

  const generarTabla = () => {
    const nuevaTabla = []
    for (let i = 1; i <= limite; i++) {
      nuevaTabla.push(`${numero} x ${i} = ${numero * i}`)
    }
    setResultado(nuevaTabla)
  }

  return (
    <main>
      <div className="card">
        <div className="tabla">

          <h1>Tablas de Multiplicar</h1>

          <label className="text">
            Ingrese un número:
            <input
              className="input"
              type="number"
              value={numero}
              onChange={(e) => setNumero(parseInt(e.target.value))}
            />
          </label>

          <br />

          <label className="text">
            Límite de números a mostrar:
            <input
              className="input"
              type="number"
              value={limite}
              onChange={(e) => setLimite(parseInt(e.target.value))}
            />
          </label>

          <br /><br />

          <button className="button" onClick={generarTabla}>
            Generar Tabla
          </button>

          <hr />

          <h3>Resultado</h3>
          <ul className="ul">
            {resultado.map((item, index) => (
              <li className="li" key={index}>
                {item}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </main>
  )
}

export default App
