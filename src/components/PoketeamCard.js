import React from 'react'
import { Radar } from 'react-chartjs-2'

class PoketeamCard extends React.Component {
  constructor (props) {
    super(props)
    let poketeam = this.props.poketeam
    this.state = { poketeamData: poketeam }
  }

  averagePokemon = (averagepokemonstats) => {
    const pokemonsprite = JSON.parse(averagepokemonstats)
    return pokemonsprite.sprites.front_default
  }

  titleCaseName = (name) => {
    return name.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1))
    }).join(' ')
  }

  pokemonTypes = (averagepokemonstats) => {
    const apiData = JSON.parse(averagepokemonstats)
    let listTypes = apiData.types.map(type => type.type.name)
    return listTypes.join(', ')
  }

  render () {
    const { titleCaseName, averagePokemon, pokemonTypes } = this
    const { poketeam, viewAllPoketeams } = this.props

    return (
      <div className='section'>
        <h1><strong>{poketeam.name}</strong></h1>
        <div className='columns' key={poketeam.id}>
          {
            poketeam.pokemons.map(pokemon => (
              <div className='column is-3'>
                <h1><strong>{pokemon.nickname}</strong></h1>
                <h1>Level: {pokemon.level}</h1>
                <h3>Species: {titleCaseName(pokemon.name)}</h3>
                <h4>Types: {pokemonTypes(pokemon.averagepokemonstats)}</h4>
                <img src={averagePokemon(pokemon.averagepokemonstats)} />
                <p>HP: {pokemon.hp}</p>
                <p>Attack: {pokemon.attack}</p>
                <p>Spc Attack: {pokemon.special_attack}</p>
                <p>Defense: {pokemon.defense}</p>
                <p>Spc Defense: {pokemon.special_defense}</p>
                <p>Speed: {pokemon.speed}</p>
                <p>Nature: {pokemon.nature}</p>
              </div>
            ))
          }
          <button onClick={viewAllPoketeams}>Back to All Poketeams</button>
        </div>
      </div>
    )
  }
}

export default PoketeamCard
