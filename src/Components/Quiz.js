import React, { useState, useContext, useEffect } from 'react'
import { QuizContext } from '../Contexts/Context'
import { Questions } from '../Utils/QuestionsBank'
import FinalResult from './FinalResult'

function Quiz() {
    const { score, setScore, setGameState} = useContext(QuizContext)
    const [question, setQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [sec, setSec] = useState("00")
    const [min, setMin] = useState(5)

    const startingMinute = 5
    let time = startingMinute * 60

    const countDown = () => {
        const minutes = Math.floor(time / 60)
        let seconds = (time % 60) 
        seconds = seconds < 10 ? '0' + seconds : seconds
        setSec(seconds)
        setMin(minutes)
        time--
    }

    useEffect(() => {
      let interval =  setInterval(countDown, 1000) 
      setTimeout(() => {
          clearInterval(interval)
      }, 301000)       
     }, [])
        
    
    const nextQuestion = () => {
        if(Questions[question].answer == selectedAnswer) {
            setScore(score + 1)
            setSelectedAnswer("")
            console.log(score);
        }
        setQuestion(question + 1)
     }

    const quizEnd = () => {
        if(Questions[question].answer == selectedAnswer) {
            setScore(score + 1)
            console.log(score);
        }
        setGameState("finalResult")
     }

    if(min  == 0 && sec == 0) {
        return <FinalResult />
     }
        return(
            <div>
                <p className="text-center text-base">Time left is: {`${min}:${sec}`}</p>
                <p className="text-center">Question {question+1} /12</p>               
                <h1 className="text-lg text-center font-semibold mb-4 mt-2 md:mb-8 md:mt-4">{Questions[question].prompt}</h1>
                <div className="options">
                  <div className="text-center"><button className="text-base border border-white focus:outline-none focus:border-purple-900 focus:bg-white focus:text-purple-900 w-3/4 mb-3 p-3 md:w-2/4 md:mb-6" onClick={() => setSelectedAnswer("optionA")}>{Questions[question].optionA}</button></div>  
                  <div className="text-center"><button className="text-base border border-white focus:outline-none focus:border-purple-900 focus:bg-white focus:text-purple-900 w-3/4 mb-3 p-3 md:w-2/4 md:mb-6" onClick={() => setSelectedAnswer("optionB")}>{Questions[question].optionB}</button></div>  
                  <div className="text-center"><button className="text-base border border-white focus:outline-none focus:border-purple-900 focus:bg-white focus:text-purple-900 w-3/4 mb-3 p-3 md:w-2/4 md:mb-6" onClick={() => setSelectedAnswer("optionC")}>{Questions[question].optionC}</button></div>  
                </div>
                {question == Questions.length - 1 ? (
                    <div className="text-center"><button className="text-lg focus:outline-none" onClick={quizEnd}>Quiz End</button></div>
                ) : (
                    <div className="text-center"><button className="text-lg focus:outline-none" onClick={nextQuestion}>Next Question</button></div>
                )}           
            </div>
        )     
}

export default Quiz
