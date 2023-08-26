import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#ffffff")

  return (
    <>
      <img src='../public/color-logo.png' width={200}></img>
      <h1>Color quiz</h1>
      <div className="card" style={{backgroundColor: color}}>
        <button onClick={() => setColor("#" + Math.floor(Math.random()*16777215).toString(16))}>
          color is {color}
        </button>
      </div>
    </>
  )
}

export default App
