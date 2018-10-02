import React from 'react'
import PokemonsCollection from './PokemonsCollection'
import NavBar from './NavBar'
import NewPokemon from './NewPokemon'
import PokemonCard from './PokemonCard'
import API from '../adapters/API'

class PokemonsPage extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount () {
    API.getPokemon()
      .then(pokemons => this.setState({ pokemons: pokemons }))
  }

  render () {
    return (
      <div>
        <PokemonsCollection pokemons={this.state.pokemons} />
        <NewPokemon />
      </div>

    )
  }
}

export default PokemonsPage
