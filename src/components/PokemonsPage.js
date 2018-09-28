import React from 'react'
import PokemonsCollection from './PokemonsCollection'
import PokemonCard from './PokemonCard'

class PokemonsPage extends React.Component {

  state = {
    pokemons: []
  }


  


componentDidMount () {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then (resp => resp.json())
    .then (pokemons => 
      pokemons.results.forEach((pokemon) => {
      fetch(pokemon.url)
      .then (resp => resp.json())
      .then (pokemon => this.setState({pokemons: pokemon}))
    })
  )}


render () {
  return (
    <div>
      <PokemonsCollection pokemons = {this.state.pokemons}/>
    </div>
  )
}


}

export default PokemonsPage