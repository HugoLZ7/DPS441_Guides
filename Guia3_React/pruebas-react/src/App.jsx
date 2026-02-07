import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'

const App = () => { 
  return (
    <div className="App">
      <div className="App-content">
        <h2>
          Lista de cosas por hacer
        </h2>
        <Form />
      </div>
    </div>
  );
}

export default App
