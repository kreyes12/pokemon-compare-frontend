import React from 'react'
import PokemonsCollection from '../pokemon/PokemonsCollection'
import API from '../../adapters/API'

class UpdatePoketeam extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      pokemons: []
    }
  }

  componentDidMount () {
    API.getPokemon()
      .then(pokemons => this.setState({ pokemons: pokemons }))
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

  addPokemonToTeam = () => {

  }

  removeFromPoketeam = () => {

  }

  handleSubmit= () => {

  }

  render () {
    const { titleCaseName, averagePokemon, pokemonTypes, removeFromPoketeam, addPokemonToTeam } = this
    const { poketeam, toggleUpdateView } = this.props
    return (
      <div>
        <div className=''>
          <h1 className=''><strong>{poketeam.name}</strong></h1> <br />
          <button className='button' onClick={toggleUpdateView}>Back</button>

          <div className='tile is-ancestor' key={poketeam.id}>
            <div className='tile is-parent'>
              {
                poketeam.pokemons.map(pokemon => (
                  <div className='tile is-child is-2 box'>
                    <h1><strong>{pokemon.nickname}</strong></h1>
                    <h1>Level: {pokemon.level}</h1>
                    <h3>Species: {titleCaseName(pokemon.name)}</h3>
                    <h4>Types: {pokemonTypes(pokemon.averagepokemonstats)}</h4>
                    <img src={averagePokemon(pokemon.averagepokemonstats)} /> <br />
                    <button className='button' onClick={removeFromPoketeam}>Remove</button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className=''>
          <PokemonsCollection pokemons={this.state.pokemons} addPokemonToTeam={addPokemonToTeam} />
        </div>
      </div>

    )
  }
}

export default UpdatePoketeam
