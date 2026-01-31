import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState('')

  const validarNumeros = () => {
    if (numero1 === '' || numero2 === '') {
      setResultado('Debe ingresar ambos números')
      return false
    }
    return true
  }

  const sumar = () => {
    if (!validarNumeros()) return
    setResultado(`Resultado: ${parseFloat(numero1) + parseFloat(numero2)}`)
  }

  const restar = () => {
    if (!validarNumeros()) return
    setResultado(`Resultado: ${parseFloat(numero1) - parseFloat(numero2)}`)
  }

  const multiplicar = () => {
    if (!validarNumeros()) return
    setResultado(`Resultado: ${parseFloat(numero1) * parseFloat(numero2)}`)
  }

  const dividir = () => {
    if (!validarNumeros()) return
    if (parseFloat(numero2) === 0) {
      setResultado('❌ Error: No se puede dividir entre cero')
      return
    }
    setResultado(`Resultado: ${parseFloat(numero1) / parseFloat(numero2)}`)
  }

  const potenciar = () => {
    if (!validarNumeros()) return
    setResultado(`Resultado: ${Math.pow(parseFloat(numero1), parseFloat(numero2))}`)
  }

  const raizCuadrada = () => {
    if (numero1 === '') {
      setResultado('Debe ingresar el número 1')
      return
    }
    if (parseFloat(numero1) < 0) {
      setResultado('❌ Error: No se puede calcular raíz de número negativo')
      return
    }
    setResultado(`Resultado: ${Math.sqrt(parseFloat(numero1))}`)
  }

  const borrarNumeros = () => {
    setNumero1('')
    setNumero2('')
  }

  const reiniciarCalculadora = () => {
    setNumero1('')
    setNumero2('')
    setResultado('')
  }

  return (
    <main>
      <div className="card">
        <div className="calculadora">

          <h1>Calculadora</h1>

          <div className="numeros">
            <label>Número 1:</label>
            <input
              type="number"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
            />
          </div>

          <div className="numeros">
            <label>Número 2:</label>
            <input
              type="number"
              value={numero2}
              onChange={(e) => setNumero2(e.target.value)}
            />
          </div>

          <div className="botones">
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={multiplicar}>X</button>
            <button onClick={dividir}>/</button>
            <button onClick={potenciar}>^</button>
            <button onClick={raizCuadrada}>√</button>
          </div>

          <div className="botones">
            <button onClick={borrarNumeros}>Borrar</button>
            <button onClick={reiniciarCalculadora}>Reiniciar</button>
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
