import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h2>Contador: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrementar
      </button>
    </div>
    </>
  );
}

export default App
