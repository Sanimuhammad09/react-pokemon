import React, { lazy, Suspense } from "react"
import { useState, useEffect } from "react"
import { animateScroll as Scroll } from "react-scroll"
import axios from "axios"
import "./home.css"
const Card = lazy(() => import("../../components/Card/Card"))

function Home() {
  const [data, setData] = useState([])
  const [url, setUrl] = useState(["https://pokeapi.co/api/v2/pokemon"])
  const [searchInput, setSearchInput] = useState("")
  const [searchInfo, setSearchInfo] = useState([])
  const [nextData, setNextData] = useState([])
  const [preData, setPrevData] = useState([])
  const [searchView, setSearchView] = useState(false)
  const getPokemon_info = async () => {
    const pokemon_data = await axios.get(url)
    setNextData(pokemon_data.data.next)
    setPrevData(pokemon_data.data.previous)
    const result = pokemon_data.data.results
    getPokemon(result)
  }

  const handleSearch = async (event) => {
    event.preventDefault()
    if (!searchInput.length) 
    {
      alert("Search bar cannot be blank")
      return
    }
    try {
      const searchItem = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
      setSearchView(true); 
      setSearchInfo(searchItem.data); 
      setSearchInput("")
    } catch (error) {
      alert("Sorry Name doesnt Exist")
    }
  }

  const getPokemon = async (base_info) => {
    let pokeArr = []
    for (let a = 0; a < base_info.length; a++) {
      base_info[a] = await axios.get(base_info[a].url)
    }
    base_info.map((item) => {
      return (pokeArr.push(item.data))
    })
    setData(pokeArr)
  }

  useEffect(() => {
    getPokemon_info()
  }, [url])
  return (
    <div>
      <div className="container">
        <h1>What are you looking for?</h1>
        <div className="search">
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="search pokemon"
              value={searchInput}
              onChange={(event) => {
                setSearchInput(event.target.value)
              }}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="content-container">
          <div className="content">
          {searchView && <button className="cancel-search" onClick={()=>{setSearchView(false)}}>X</button>}
            {(searchView)? ( <Card info = {searchInfo}/>
            ) : (
              data.map((item) => {
                return(<Suspense fallback={<div>Loading ...</div>}>
                 <Card key={item.id} info={item} />
                    </Suspense>)
              })
            )}
          </div>
          {!searchView &&<div className="page-controls">
            <span
              onClick={() => { setUrl(nextData); Scroll.scrollToTop() }}
            >
              Next
            </span>
            <span
              onClick={() => {setUrl(preData); Scroll.scrollToTop() }}
            >
              Previous
            </span>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Home
