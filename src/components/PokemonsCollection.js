import React from 'react'
import PokemonsCard from './Pokemonscard';


class PokemonsCollection extends React.Component {

  getPokemonCard = () => {
   return 
  }

  render() {
  	return (
    <div className="columns">
        {this.props.pokemons.map(singlePokemon => <PokemonsCard pokemon={ singlePokemon }/> ) }
    </div>

  )
  }

  }

export default PokemonsCollection

