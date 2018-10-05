import React from 'react'
import { Radar } from 'react-chartjs-2'
import UpdatePoketeam from './UpdatePoketeam'

class PoketeamCard extends React.Component {
  state = {
    updateView: false
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

  toggleUpdateView = () => {
    this.setState({ updateView: !this.state.updateView })
  }

  render () {
    const { titleCaseName, averagePokemon, pokemonTypes, toggleUpdateView } = this
    const { poketeam, viewAllPoketeams, deletePoketeam } = this.props

    return (
      <div>
        { this.state.updateView
          ? <UpdatePoketeam toggleUpdateView={toggleUpdateView}
            poketeam={poketeam}
            updateStatePoketeam={this.props.updateStatePoketeam} />
          : <div>
            <h1 className=''><strong>{poketeam.name}</strong></h1> <br />
            <button className='button' onClick={viewAllPoketeams}>Back to All Poketeams</button>
            <button className='button' onClick={toggleUpdateView}>Edit Team</button>
            <button className='button' onClick={() => deletePoketeam(poketeam.id)}>Delete Team</button> <br />
            <div className='tile is-ancestor' key={poketeam.id}>
              <div className='tile is-parent'>
                {
                  poketeam.pokemons.map(pokemon => (
                    <div className='tile is-child is-2 box'>
                      <h1><strong>{pokemon.nickname}</strong></h1>
                      <h1>Level: {pokemon.level}</h1>
                      <h3>Species: {titleCaseName(pokemon.name)}</h3>
                      <h4>Types: {pokemonTypes(pokemon.averagepokemonstats)}</h4>
                      <img src={averagePokemon(pokemon.averagepokemonstats)} />
                      <div className='box'>
                        <h4><strong>Stats</strong></h4>
                        <p>HP: {pokemon.hp}</p>
                        <p>Attack: {pokemon.attack}</p>
                        <p>Spc Attack: {pokemon.special_attack}</p>
                        <p>Defense: {pokemon.defense}</p>
                        <p>Spc Defense: {pokemon.special_defense}</p>
                        <p>Speed: {pokemon.speed}</p>
                        <p>Nature: {pokemon.nature}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default PoketeamCard
