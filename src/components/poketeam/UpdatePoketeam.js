import React from 'react'
import PokemonsCollection from '../pokemon/PokemonsCollection'
import API from '../../adapters/API'

class UpdatePoketeam extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // name: props.poketeam.name,
      pokemons: [],
      poketeamPokemonIds: [],
      addPokemon: true,
      poketeam: props.poketeam
    }
  }

  componentDidMount () {
    API.getPokemon()
      .then(pokemons => this.setState({ pokemons: pokemons }))
      .then(() => {
        let currPokemonIds = this.props.poketeam.pokemons.map(pokemon => pokemon.id)
        this.setState({ poketeamPokemonIds: currPokemonIds })
      })
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

  addPokemonToTeam = (id) => {
    if (this.state.poketeamPokemonIds.length > 5) {
      return alert("You can't add more than 6 Pokemon to your Team")
    } else {
      if (this.state.poketeamPokemonIds.includes(id)) {
        return alert('Either this Pokemon is already on your team, or you are trying to add more than 6 Pokemon to your team')
      } else {
      // Setup IDs to send through API on submit
        this.state.poketeamPokemonIds.push(id)

        // Add Pokemon visually to page
        let newArray = [...this.state.poketeam.pokemons]
        let newPokemon = this.state.pokemons.find(pokemon => pokemon.id === id)
        newArray.push(newPokemon)
        this.setState(prevState => ({ ...prevState, poketeam: { ...prevState.poketeam, pokemons: newArray }
        }))
      }
    }
  }

  removeFromPoketeam = (id) => {
    // Setup IDs to send through API on submit
    let updatedArr = [...this.state.poketeamPokemonIds]
    let finalArr = updatedArr.filter(pokemonId => pokemonId !== id)
    this.setState({ poketeamPokemonIds: finalArr })

    // Remove Pokemon visually from page
    let newArray = [...this.state.poketeam.pokemons]
    let newIdArr = newArray.filter(pokemon => pokemon.id !== id)
    this.setState(prevState => ({ ...prevState, poketeam: { ...prevState.poketeam, pokemons: newIdArr }
    }))
  }

  handleSubmit= () => {
    API.updatePoketeam(this.state.poketeam.id, this.state.poketeam.name, this.state.poketeamPokemonIds)
      .then(data => {
        if (data.errors) {
          console.log(data)
        } else {
          this.props.updateStatePoketeam(this.state.poketeam)
          this.props.toggleUpdateView()
        }
      })
  }

  render () {
    const { titleCaseName, averagePokemon, pokemonTypes, removeFromPoketeam, addPokemonToTeam, handleSubmit } = this
    const { poketeam } = this.state
    const { toggleUpdateView } = this.props
    return (
      <div>
        <div className=''>
          <h1 className=''><strong>{poketeam.name}</strong></h1>
          <button className='button' onClick={toggleUpdateView}>Go Back</button>
          <button className='button' onClick={handleSubmit}>Save Changes</button>
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
                    <button className='button' onClick={() => removeFromPoketeam(pokemon.id)}>Remove</button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className=''>
          <PokemonsCollection
            pokemons={this.state.pokemons}
            handleClick={addPokemonToTeam}
            addPokemon={this.state.addPokemon} />
        </div>
      </div>

    )
  }
}

export default UpdatePoketeam
