import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import ResetButton from './components/ResetButton'
const App = () => {
  const [squares, setSquares] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])

  const [turnCount, setTurnCount] = useState(0)

  const handleGamePlay = (index) => {

    let newSquares = [...squares]
  
    if (turnCount === 8) {
      alert("Game Over!")
    } else if (
      "X" === newSquares[0] && // across top
      "X" === newSquares[1] &&
      "X" === newSquares[2] ||
      "X" === newSquares[3] && // accross mid
      "X" === newSquares[4] &&
      "X" === newSquares[5] ||
      "X" === newSquares[6] && // accross bot
      "X" === newSquares[7] &&
      "X" === newSquares[8] ||
      "X" === newSquares[0] && // vert left
      "X" === newSquares[3] &&
      "X" === newSquares[6] ||
      "X" === newSquares[1] && // vert mid
      "X" === newSquares[4] &&
      "X" === newSquares[7] ||
      "X" === newSquares[2] && // vert right
      "X" === newSquares[5] &&
      "X" === newSquares[8] ||
      "X" === newSquares[0] && // top left diag
      "X" === newSquares[4] &&
      "X" === newSquares[8] ||
      "X" === newSquares[2] && // top right diag
      "X" === newSquares[4] &&
      "X" === newSquares[6] 
      ) {
        alert("X is the winner!")
      } else if (
        "O" === newSquares[0] && // across top
        "O" === newSquares[1] &&
        "O" === newSquares[2] ||
        "O" === newSquares[3] && // accross mid
        "O" === newSquares[4] &&
        "O" === newSquares[5] ||
        "O" === newSquares[6] && // accross bot
        "O" === newSquares[7] &&
        "O" === newSquares[8] ||
        "O" === newSquares[0] && // vert left
        "O" === newSquares[3] &&
        "O" === newSquares[6] ||
        "O" === newSquares[1] && // vert mid
        "O" === newSquares[4] &&
        "O" === newSquares[7] ||
        "O" === newSquares[2] && // vert right
        "O" === newSquares[5] &&
        "O" === newSquares[8] ||
        "O" === newSquares[0] && // top left diag
        "O" === newSquares[4] &&
        "O" === newSquares[8] ||
        "O" === newSquares[2] && // top right diag
        "O" === newSquares[4] &&
        "O" === newSquares[6] 
      ) {
        alert("O is the winner!")
      
   

    } else if (
      turnCount % 2 === 0
      && newSquares[index] !== "X"
      && newSquares[index] !== "O"
      ) {
        newSquares[index] = "X"
        setSquares(newSquares)
        setTurnCount((turnCount + 1))
        console.log(turnCount)
    } else if (
      turnCount % 2 === 1 
      && newSquares[index] !== "X" 
      && newSquares[index] !== "O"
      ) {
        newSquares[index] = "O"
        setSquares(newSquares)
        setTurnCount((turnCount + 1))
        console.log(turnCount)
    }
  }

    const handleResetGame = () => {
       setSquares([" ", " ", " ", " ", " ", " ", " ", " ", " "])
       setTurnCount(0)
    }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="boardgame" >
        {squares.map((value, index) => {
          return (
            <Square value={value} index={index} handleGamePlay={handleGamePlay} />
          )
        })}
      </div>
      <ResetButton handleResetGame={handleResetGame} turnCount={setTurnCount} square={setSquares} />
    </>
  )
}  

export default App