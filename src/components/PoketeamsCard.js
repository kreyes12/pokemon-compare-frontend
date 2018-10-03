import React from 'react'
import { types } from 'util'

class PoketeamsCard extends React.Component {
    state={

    }

    averagePokemon = (averagepokemonstats) => {
      const pokemonsprite = JSON.parse(averagepokemonstats)
      return pokemonsprite.sprites.front_default
    }

    render () {
      const { poketeam, showPoketeam } = this.props
      return (
        <div className='tile is-ancestor box'>
          <div className='tile is-vertical is-6'>
          <h1 className='tile is-12'>{poketeam.name}</h1>
            <div className='tile is-parent'>
              {
                poketeam.pokemons.map(pokemon =>
                  (<div className='tile is-child is-4'>
                    <h1>{pokemon.nickname}</h1>
                    <h3>{pokemon.name}</h3>
                    <img src={this.averagePokemon(pokemon.averagepokemonstats)} />
                  </div>)
                )
              }
              <div className='tile is-child is-vertical'>
                <button className='' onClick={() => showPoketeam(poketeam)}>View Team</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default PoketeamsCard
