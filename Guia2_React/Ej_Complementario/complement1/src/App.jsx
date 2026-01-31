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
              <li className="jugadorCard" key={jugador.id}>
                <img
                  src={jugador.imagen}
                  alt={jugador.nombre}
                  className="imgJugador"
                />

                <strong>{jugador.nombre}</strong>
                <p>
                  Altura: {jugador.altura} <br />
                  Peso: {jugador.peso} Kg
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
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        {
          id: 1,
          nombre: "Jude Bellingham",
          altura: "1.86",
          peso: "75",
          imagen: "https://img.a.transfermarkt.technology/portrait/header/581678-1748102891.jpg?lm=1"
        },
        {
          id: 2,
          nombre: "Vinicius Junior",
          altura: "1.76",
          peso: "73",
          imagen: "https://img.a.transfermarkt.technology/portrait/header/371998-1761575144.jpg?lm=1"
        },
        {
          id: 3,
          nombre: "Kylian Mbappé",
          altura: "1.78",
          peso: "75",
          imagen: "https://img.a.transfermarkt.technology/portrait/header/342229-1682683695.jpg?lm=1"
        }
      ]
    },
    {
      id: 2,
      nombre: "FC Barcelona",
      plantilla: [
        {
          id: 4,
          nombre: "Robert Lewandowski",
          altura: "1.85",
          peso: "81",
          imagen: "https://img.a.transfermarkt.technology/portrait/header/38253-1760445524.jpg?lm=1"
        },
        {
          id: 5,
          nombre: "Pedri",
          altura: "1.69",
          peso: "60",
          imagen: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/PEDRI-min.jpg"
        },
        {
          id: 6,
          nombre: "Frenkie de Jong",
          altura: "1.80",
          peso: "74",
          imagen: "https://preview.redd.it/thoughts-on-frenkie-de-jongs-performance-v0-hwdreuorifee1.jpeg?auto=webp&s=b8c80e0e4f35108984fbcaa6f272758645e8a061"
        }
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
