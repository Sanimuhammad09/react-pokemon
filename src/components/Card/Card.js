import { Link } from "react-router-dom"
import { animateScroll as Scroll } from "react-scroll"
import "./card.css"

function Card(props) {
  return(
    <div>
      <div className="card-container">
        <div className="pokeInfo">
          <Link to={`/single/${props.info.id}`}>
            <h4>{props.info.name}</h4>
            <h3>{props.info.id}</h3>
          </Link>
          <div className="card-nickname">
            {props.info.abilities &&
              props.info.abilities.map((abilit) => {
                return <h5 key={abilit.ability.url}>{abilit.ability.name}</h5>
              })}
          </div>
        </div>
        <Link to={`/single/${props.info.id}`} onClick={Scroll.scrollToTop}>
          <img src={props.info.sprites.other.home.front_default} alt="poke" />
        </Link>
      </div>
    </div>
  )
}

export default Card
