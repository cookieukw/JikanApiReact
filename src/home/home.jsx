
import react from 'react'
import styled from 'styled-components'
import { useState, useEffect } from "react"
const Home= () =>{
  let [animes, setAnimes] = useState({});
  const url= "https://pastebin.com/raw/XdQAk8HV"
  useEffect(()=>{
    fetch('url')
    .then(response => response.json())
    .then(data => setAnimes(data.data))
  },[])
function l(l){
  console.log
}
  return (
async function load(){
  
const b2 = animes.data[1]
const entradas = b2.entry[0]

const image = entradas.images[Object.keys(entradas.images)[0]].large_image_url
l(`title: ${entradas.title}`)
l(`image: ${image}`)
l(`description: ${b2.content}`)
}
load()



    <>
    {data.map(()=>{
      
      
      
    })}
    </>
  );
}

export default Home;
