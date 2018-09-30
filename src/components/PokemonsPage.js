import React from 'react'
import PokemonsCollection from './PokemonsCollection'
import NavBar from './NavBar'
import PokemonCard from './PokemonCard'

class PokemonsPage extends React.Component {

  state = {
    pokemons: []
  }

  // fetches all pokemon from pokemonapi
  // componentDidMount () {
  //   fetch("https://pokeapi.co/api/v2/pokemon/")
  //     .then (resp => resp.json())
  //     .then (pokemons => 
  //       pokemons.results.forEach((pokemon) => {
  //       fetch(pokemon.url)
  //       .then (resp => resp.json())
  //       .then (pokemon => this.setState({pokemons: [...this.state.pokemons, pokemon]}))
  //     })
  //   )}
  


componentDidMount () {
  fetch("http://localhost:3000/pokemons")
    .then (resp => resp.json())
    .then (pokemons =>  this.setState({pokemons: pokemons}))
}



render () {
  return (
    <div>
      <NavBar />
      <PokemonsCollection pokemons={ this.state.pokemons }/>
      <PokemonCard />
    </div>

  )
}


}

export default PokemonsPage