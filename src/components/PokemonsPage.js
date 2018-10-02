import React from 'react'
import PokemonsCollection from './PokemonsCollection'
import NavBar from './NavBar'
import PokemonCard from './PokemonCard'
import API from '../adapters/API'

class PokemonsPage extends React.Component {
  state = {
    pokemons: []
  }

  deletePokemon = (id) => { 
    API.deletePokemon(id)
      .then(data => {
        if (data.errors) {
          console.log(data)
        } else {
          let currPokemon = this.state.pokemons.filter(pokemon => pokemon.id !== id)
          this.setState({ pokemons: currPokemon })
        }
      })
  }

  componentDidMount () {
    API.getPokemon()
      .then(pokemons => this.setState({ pokemons: pokemons }))
  }

  render () {
    return (
      <div>
        { pokemons.length === 0 ?
        <p></p>
        }
        <PokemonsCollection pokemons={this.state.pokemons} deletePokemon={this.deletePokemon} />
      </div>

    )
  }
}

export default PokemonsPage
