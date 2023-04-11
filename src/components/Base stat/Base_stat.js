import React from "react"
import "./base_stat.css"

function Base_stat(props) {
  // console.log(props.stat)
  return (
    <div className="base_container">
      {props.stat &&
        props.stat.map((statistics) => {
          return (
            <div className="base" key={statistics.stat.url}>
              <span>{statistics.stat.name}</span>
              <span>{statistics.base_stat}</span>
              <div className="progress">
                <div className="bar" style={{ backgroundColor: statistics.base_stat < 50 ? "red" : "green", width: statistics.base_stat + "%" }}></div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Base_stat
