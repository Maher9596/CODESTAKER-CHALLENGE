import React, {useContext} from 'react'
import { QuizContext } from '../Contexts/Context'
import "../App.css"
function Menu() {
    const {gameState, setGameState} = useContext(QuizContext)

   
    return (
        <div>
            <div className="m-auto text-center">
                <button className="border border-white mt-32 w-3/4 md:w-2/4 text-xl  p-3" onClick = {() => {setGameState("quiz")}}>Start Quiz</button> 
            </div>
        </div>
    )
}

export default Menu
