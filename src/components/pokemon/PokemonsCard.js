import React from 'react'
import API from '../../adapters/API'

class PokemonsCard extends React.Component {
    state={
      active: false
    }


averagePokemon = () => {
  const pokemonsprite = JSON.parse(this.props.pokemon.averagepokemonstats)
  return pokemonsprite.sprites.front_default
}

getAveragePokemon = () => {
  const averagePokemon = JSON.parse(this.props.pokemon.averagepokemonstats)
  return averagePokemon
}

titleCaseName = (name) => {
  return name.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1))
  }).join(' ')
}

handleClick = () => {
  this.props.showPokemon(this.getAveragePokemon())
}

toggleClass = () => {
  const currentState = this.state.active
  this.setState({ active: !currentState })
}

titleCaseName = (name) => {
  return name.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1))
  }).join(' ')
}

render () {
  return (
    <div className={this.state.active ? 'card-flip flip' : 'card-flip'} onClick={this.toggleClass} key={this.props.pokemon.id}>
      <div className='flipper'>
        <div className='front'>
          <img className='card-sprite' src={this.averagePokemon()} alt='Pokemon-sprite' />
          <div className='poke-content'>
            <p className='title'>{this.titleCaseName(this.props.pokemon.nickname)}</p>
            <p className='subtitle'>{this.titleCaseName(this.props.pokemon.name)}</p>
          </div>
        </div>
        <div className='back'>
          <div className='poke-content'>
            <p className='title'>{this.titleCaseName(this.props.pokemon.name)}</p>
            <p className='title'>Lv: {this.props.pokemon.level}</p>
            <p><strong>HP: </strong>{this.props.pokemon.hp}</p>
            <p><strong>Attack: </strong>{this.props.pokemon.attack}</p>
            <p><strong>Spc Attack: </strong>{this.props.pokemon.special_attack}</p>
            <p><strong>Defence: </strong>{this.props.pokemon.defence}</p>
            <p><strong>Spc Defence: </strong>{this.props.pokemon.special_defence}</p>
            <p><strong>Speed: </strong>{this.props.pokemon.speed}</p>
            <p><strong>Nature: </strong>{this.props.pokemon.nature}</p>
          </div>
          <button className='button is-primary' onClick={this.handleClick}>View Species Stats</button>
          <button className='button is-danger' onClick={() => this.props.handleClick(this.props.pokemon.id)}>{this.props.addPokemon ? 'Add Pokemon' : 'Delete Pokemon'}</button>
        </div>
      </div>
    </div>

  )
}
}

export default PokemonsCard
