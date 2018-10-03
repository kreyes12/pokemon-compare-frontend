import React from 'react'
import { types } from 'util'

const testArray = ['Leafy', 'Ratty', 'Pididgey']

class PoketeamsCard extends React.Component {
    state={
      active: false
    }

    render () {
      const { active } = this.state
      const { poketeam, showPoketeam } = this.props
      return (
        <div className='section container'>
          <h1>{poketeam.name}</h1>
          <div className='columns'>
            {
              poketeam.pokemons.map(pokemon =>
                (<div className='column is-3'>
                  <h1>{pokemon.name}</h1>
                </div>)
              )
            }
          </div>
        </div>
      )
    }
}

export default PoketeamsCard
