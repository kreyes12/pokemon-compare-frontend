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

      <div className='columns wrap'>
        { this.state.selectedPokemon
          ? <PokemonCard pokemon={this.state.selectedPokemon} viewAllPokemon={this.viewAllPokemon} />
          : this.props.pokemons.map(singlePokemon => <PokemonsCard showPokemon={this.showPokemon}
            pokemon={singlePokemon}
            handleClick={this.props.handleClick}
            addPokemon={this.props.addPokemon} />) }
      </div>

    )
  }
}

export default PokemonsCollection
