import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Quiz from './components/quiz/Quiz'

function App() {
  const [color, setColor] = useState("#ffffff")

  return (
    <>
      <Header />
      <img src='../public/color-logo.png' alt='logo' width={200}></img>
      <h1>Color quiz</h1>
      <Quiz/>
    </>
  )
}

export default App
