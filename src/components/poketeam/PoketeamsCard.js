import React from 'react'
import { types } from 'util'

class PoketeamsCard extends React.Component {

    averagePokemon = (averagepokemonstats) => {
      const pokemonsprite = JSON.parse(averagepokemonstats)
      return pokemonsprite.sprites.front_default
    }

    render () {
      const { poketeam, showPoketeam } = this.props
      return (
        <div>
          <button className='button' onClick={() => showPoketeam(poketeam)}>View Team</button>
          <div className='tile is-ancestor'>
            <div className='tile is-parent'>
              {
                poketeam.pokemons.map(pokemon =>
                  (<div className='tile is-child is-2'>
                    <h1><strong>{pokemon.nickname}</strong></h1>
                    <h3>{pokemon.name}</h3>
                    <img src={this.averagePokemon(pokemon.averagepokemonstats)} />
                  </div>)
                )
              }
            </div>
          </div>
        </div>
      )
    }
}

export default PoketeamsCard
