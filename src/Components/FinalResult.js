import React, { useContext } from 'react'
import { QuizContext } from '../Contexts/Context'
import { Questions } from '../Utils/QuestionsBank'

function FinalResult() {
    const { score, setScore, setGameState } = useContext(QuizContext)
    console.log(score);
    const restartQuiz = () => {
        setScore(0)
        setGameState("menu")
    }

    return (
        <div className="">
            <p className="text-3xl">Your Final Result:</p>
            <p className="text-xl mt-4">{score} / {Questions.length}</p>
            <div className="text-lg text-center outline-none mt-32 m-auto border border-white w-3/4 md:w-1/4 text-xl p-3"><button onClick={restartQuiz}>Restart</button></div>   
        </div>
    )
}

export default FinalResult
