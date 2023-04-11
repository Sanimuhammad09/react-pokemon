import React from "react"
import "./details.css"

function Details(props) {
  return (
    <div className="detail-container">
      <h1>{props.title}</h1>
      <div className="stat_info">
        <span>{props.info}</span>
      </div>
    </div>
  )
}

export default Details
