import React from "react"

export default function Score(props){
    return(
        <div className="playerScore">
            <h1 className="score">Your Score:{props.score}</h1>
        </div>
        
    )
}