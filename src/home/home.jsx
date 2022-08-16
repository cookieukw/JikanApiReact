
import react from 'react'
import styled from 'styled-components'
import { useState, useEffect } from "react"
import { Image } from './Image'
import { Container } from './container'
import Navbar from './Navbar'

const Home = () => {

  let [animes, setAnimes] = useState([]);

  const url= "https://api.jikan.moe/v4/recommendations/anime"

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(result => setAnimes(result.data))
  },[])

  console.log(animes)

  return(
   <Container>
   <h1> Recomendações </h1>
   
   <ul>
    {animes.map(anime => {
      const entradas = anime.entry[0]
      return (
        <li key={anime.mal_id}>
          <Image url={entradas.images[Object.keys(entradas.images)[0]].large_image_url} title={entradas.title } />
        </li>
      )
    }
    )}
    </ul>

    <Navbar />
    </Container>
)
    
  
}

export default Home;
