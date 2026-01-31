import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const element = <h1>Hola Mundo</h1>;
  return (
    <>
     <main>
      <div className='card'>
        {element}
      </div>
     </main>
    </>
  )
}

export default App
