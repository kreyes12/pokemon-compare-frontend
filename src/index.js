import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'

const pokeName = ""

// function getAllPokemon() {
//   let allPokemon= [] 
//   fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then (resp => resp.json())
//     .then (pokemons => 
//       pokemons.results.forEach((pokemon) => {
//       fetch(pokemon.url)
//       .then (resp => resp.json())
//       .then (pokemon => allPokemon.push(pokemon.name))
//     })
//   )
//   return allPokemon
// }

// console.log(getAllPokemon())


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()





  