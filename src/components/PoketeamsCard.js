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
        <div className='container'>
          <h1>{poketeam.name}</h1>
          <div className='columns'>
            {
              poketeam.pokemons.map(pokemon =>
                (<div className='column is-3'>
                  <h1>{pokemon.nickname}</h1>
                  <h3>{pokemon.name}</h3>
                  <img src={this.averagePokemon(pokemon.averagepokemonstats)} />
                </div>)
              )
            }
            <button onClick={() => showPoketeam(poketeam)}>View Team</button>
          </div>
        </div>
      )
    }
}

export default PoketeamsCard
