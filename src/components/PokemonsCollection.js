import React from 'react'
import PokemonCard from './PokemonCard'

class PokemonsCollection extends React.Component {

  render () {
  	return (
    <div>Pokemon Collection
    {
      this.props.pokemons.map((pokemon) => {
        return (
          <PokemonCard />
        )
      })
    }
    </div>
  	)
  }

};

export default PokemonsCollection

