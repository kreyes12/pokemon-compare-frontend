import React from 'react'
import { Radar } from 'react-chartjs-2'

class PokemonCard extends React.Component {
  state= {
    pokemonData: {}
  }

  getStats = () => {
    const stats = this.props.pokemon.stats.reduce(
      (acc, stat) => ({ ...acc, [stat.stat.name]: stat.base_stat }),
      {}
    )

    this.setState({
      pokemonData: {
        'HP': stats.hp,
        'Attack': stats.attack,
        'Spc Attack': stats['special-attack'],
        'Defense': stats.defense,
        'Spc Defense': stats['special-defense'],
        'Speed': stats.speed
      }
    })
    // this.props.pokemon.stats.map(stat => ({name: stat.stat.name, value: stat.base_stat}))})
  }

  componentDidMount = () => {
    this.getStats()
  }

  titleCaseName = (name) => {
    return name.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1))
    }).join(' ')
  }

  abilities = () => {
    let list = ''
    let i = 1
    this.props.pokemon.abilities.map(ability => {
      list += `${i}: ${ability.ability.name} `
      i++
    })
    return list
  }

  types = () => {
    let list = ''
    let i = 1
    this.props.pokemon.types.map(type => {
      list += `${i}: ${type.type.name} `
      i++
    })

    return list
  }

  render () {
    let data = {
      labels: ['HP', 'Attack', 'Spc Attack', 'Defense', 'Spc Defense', 'Speed'],
      datasets: [{
        label: 'Pokemon Stats',
        data: Object.values(this.state.pokemonData),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
        borderWidth: 0
      }]
    }

    return (

      <div className='card column is-12' key={this.props.pokemon.id}>
        <div className='card-header'>
          <p className='card-header-title title is-centered'>
            {this.titleCaseName(this.props.pokemon.name)}
          </p>
        </div>
        <div className='card-content columns stats'>
          <div className='column is-3'>
            <img src={`${this.props.pokemon.sprites.front_default}`} />
            <p><strong>Ability:</strong> {this.abilities()}</p>
            <p><strong>Types:</strong> {this.types()}</p>
          </div>
          <div className='column chart is-7'>
            <Radar ref='chart' data={data} redraw />
          </div>
        </div>
        <button className='button' onClick={this.props.viewAllPokemon}>View all Pokemon</button>

      </div>

    )
  }
};

export default PokemonCard
