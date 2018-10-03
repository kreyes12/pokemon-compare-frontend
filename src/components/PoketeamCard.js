import React from 'react'
import { Radar } from 'react-chartjs-2'

class PokemonCard extends React.Component {
  state= {

  }

  averagePokemon = (averagepokemonstats) => {
    const pokemonsprite = JSON.parse(averagepokemonstats)
    return pokemonsprite.sprites.front_default
  }

  render () {
    const { active } = this.state
    const { poketeam, showPoketeam } = this.props
    return (
      <div>
        <h1>{poketeam.nickname}</h1>
        <h3>{poketeam.name}</h3>
        <img src={this.averagePokemon(poketeam.pokemons.averagepokemonstats)} />
      </div>
    )
  }
};

export default PokemonCard
