import React from 'react'
const ResetButton = (props) =>  {
    const resetClick = () => {
        (props.handleResetGame(props.turnCount))
        (props.handleResetGame(props.squares))
    }


    return (
        <div>
            <button onClick={resetClick}> Reset Game </button>

        </div>
    )
}

export default ResetButton