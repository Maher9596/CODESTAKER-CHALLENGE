import './App.css';
import React, { useState } from 'react'
import Menu from './Components/Menu'
import Quiz from './Components/Quiz'
import FinalResult from './Components/FinalResult'
import Answers from './Components/Answers'
import { QuizContext } from './Contexts/Context'

function App() {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)
     
  return (
    <div>
      <h1 className="text-3xl text-center mt-2 font-bold mb-8">Quiz App</h1>
      <QuizContext.Provider value = {{gameState, setGameState, score, setScore}}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "finalResult" && <FinalResult />}
        {gameState === "answers" && <Answers />}
      </QuizContext.Provider>
      </div>
  )
}

export default App
