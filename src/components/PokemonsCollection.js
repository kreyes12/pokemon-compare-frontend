import React from 'react'
import PokemonsCard from './PokemonsCard'
import PokemonCard from './PokemonCard'

class PokemonsCollection extends React.Component {
  state={
    selectedPokemon: false
  }

  viewAllPokemon = () => {
    this.setState({ selectedPokemon: false })
  }

  showPokemon = (pokemon) => {
    this.setState({ selectedPokemon: pokemon })
  }

  render () {
    return (
      <div className='container'>
        <div className='columns'>
          { this.state.selectedPokemon
            ? <PokemonCard pokemon={this.state.selectedPokemon} viewAllPokemon={this.viewAllPokemon} />
            : this.props.pokemons.map(singlePokemon => <PokemonsCard showPokemon={this.showPokemon} pokemon={singlePokemon} deletePokemon={this.props.deletePokemon} />) }
        </div>
      </div>
    )
  }
}

export default PokemonsCollection
