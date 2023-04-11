import React, { useState } from "react"
import "./moves.css"

function Moves(props) {
  const [moveLength, setMoveLength] = useState(8)
  return (
    <div className="moves">
      <div className="move-container">
        <div className="top-move">
          <h3>Moves</h3>
          <button
            onClick={() => {
              setMoveLength(props.moves.length)
            }}
          >
            See All
          </button>
        </div>
        <div className="main-move">
          {props.moves &&
            props.moves.slice(0, moveLength).map((each_move) => {
              return (
                <div className="move-card">
                  <img src={props.image} alt = "pokemon view"/>
                  <span>{each_move.move.name}</span>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Moves
