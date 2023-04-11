import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./single.css"
import Heart from "../../components/Assets/heart.png"
import Arrow from "../../components/Assets/arrow.png"
import { Link } from "react-router-dom"
import axios from "axios"
import About from "../../components/About/About"
import BaseStat from "../../components/Base stat/Base_stat"
import Moves from "../../components/Moves/Moves"

function Single() {
  let id = useParams().id
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokeData, setPokeData] = useState({})
  const [pokeAbout, setPokeAbout] = useState([])
  const [currView, setCurrView] = useState("stats")
  const [image, setImage] = useState("")
  useEffect(() => {
    const getPokemon = async () => {
      const result = await axios.get(url)
      const about = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${result.data.name}`)
      setPokeAbout(about.data)
      setPokeData(result.data)
      setImage(result.data.sprites.other.home.front_default)
    }
      getPokemon()
  }, [url])
  return (
    <div>
      <div className="single-container">
        <div className="top-section">
          <Link to="/">
            <img src={Arrow} alt="back" />
          </Link>
          <h2>{pokeData.id}</h2>
          <img src={Heart} alt="like" />
        </div>
        <div className="main-section">
          <img src={image} alt="pokeview" />
          <div className="poke-info">
            <h1>{pokeData.name}</h1>
            <h5>Seed Pokemon</h5>
            <div className="ability">
              {pokeData.abilities &&
                pokeData.abilities.map((item) => {
                  return <span key={item.ability.url}>{item.ability.name}</span>
                })}
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="bottom-display">
            <div className="title">
              <h1
                onClick={() => {
                  setCurrView("about")
                }}
              >
                About
              </h1>
              <h1
                onClick={() => {
                  setCurrView("stats")
                }}
              >
                Base Stats
              </h1>
              <h1
                onClick={() => {
                  setCurrView("moves")
                }}
              >
                Moves
              </h1>
            </div>
            <div className="info">
              {currView === "about" && <About about={pokeAbout} weight={pokeData.weight} height={pokeData.height} />}
              {currView === "stats" && <BaseStat stat={pokeData.stats} />}
              {currView === "moves" && <Moves moves={pokeData.moves} image={image} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single
