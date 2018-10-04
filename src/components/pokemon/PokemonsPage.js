import React from 'react'
import PokemonsCollection from './PokemonsCollection'
import NewPokemon from './NewPokemon'
import API from '../../adapters/API'

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
        <NewPokemon />
        { this.state.pokemons.length === 0
          ? <p>You haven't added any pokemon yet</p>
          : <PokemonsCollection pokemons={this.state.pokemons} handleClick={this.deletePokemon} />
        }
      </div>
    )
  }
}

export default PokemonsPage
