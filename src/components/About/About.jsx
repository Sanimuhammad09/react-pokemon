import React from "react"
import "./about.css"

function About(props) {
  return (
    <div className="about">
      <div className="about-container">
        <div className="title">
          <p>{props.about.flavor_text_entries && props.about.flavor_text_entries[0].flavor_text}</p>
          <div className="base-info">
            <span>weight: {props.weight}ft</span>
            <span>height: {props.height}ft</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
