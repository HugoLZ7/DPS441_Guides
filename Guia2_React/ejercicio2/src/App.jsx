import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Equipos = ({ equipos }) => {
  return (
    <div className="containerList">
      <h2 className="title">Equipos de Fútbol</h2>

      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className="nameClub">{equipo.nombre}</h3>

          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className="containerList" key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <p>
                  Altura: {jugador.altura} <br />
                  Peso: {jugador.peso}Kg
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function App() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Jude Bellingham", altura: "1.86", peso: "75" },
        { id: 2, nombre: "Vinicius Junior", altura: "1.76", peso: "73" },
        { id: 3, nombre: "Kylian Mbappé", altura: "1.78", peso: "75" }
      ]
    },
    {
      id: 2,
      nombre: "FC Barcelona",
      plantilla: [
        { id: 4, nombre: "Robert Lewandowski", altura: "1.85", peso: "81" },
        { id: 5, nombre: "Pedri", altura: "1.69", peso: "60" },
        { id: 6, nombre: "Frenkie de Jong", altura: "1.80", peso: "74" }
      ]
    }
  ]

  return (
    <main>
      <div className="card">
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  )
}

export default App
