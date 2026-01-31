import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState(null)

  const validarNumeros = () => {
    if (numero1 === '' || numero2 === '') {
      setResultado('Por favor ingrese ambos números')
      return false
    }
    return true
  }

  const sumar = () => {
    if (!validarNumeros()) return
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2)
    setResultado(`Resultado de la suma: ${resultadoSuma}`)
  }

  const restar = () => {
    if (!validarNumeros()) return
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2)
    setResultado(`Resultado de la resta: ${resultadoResta}`)
  }

  return (
    <main>
      <div className="card">
        <div className="calculadora">

          <div className="numeros">
            <label className="text">Número 1:</label>
            <input
              className="inputNum"
              type="number"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
            />
          </div>

          <div className="numeros">
            <label className="text">Número 2:</label>
            <input
              className="inputNum"
              type="number"
              value={numero2}
              onChange={(e) => setNumero2(e.target.value)}
            />
          </div>

          <div className="botones">
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
          </div>

          {resultado && (
            <div className="resultado">
              {resultado}
            </div>
          )}

        </div>
      </div>
    </main>
  )
}

export default App
