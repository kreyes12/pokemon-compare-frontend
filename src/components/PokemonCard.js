import React from 'react'
import {Radar} from 'react-chartjs-2';


 

class PokemonCard extends React.Component {

  state= {
    pokemonData: []
  }

  getStats = () => {
   this.setState({pokemonData: this.props.pokemon.stats.map(stat => stat.base_stat)})
   console.log(this.props.pokemon.name)
  }

  componentDidMount = () => {
    this.getStats()
  }

  titleCaseName = (name) => {
    return name.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  

  render() {
    
    let data = {
      labels: ["HP", "Attack", "Spc Attack", "Defense", "Spc Defense", "Speed"],
      datasets: [{
        label: 'Pokemon Stats',
        data: this.state.pokemonData,
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
      <section>
        <div className="card">
          <div className="card-header">
            <p className="card-header-title title is-centered">
            {this.titleCaseName(this.props.pokemon.name)}
            </p>
          </div>
          <div className="card-content columns">
            <div className="column is-4">
               
                <img src={`${this.props.pokemon.sprites.front_default}`} />
                <p><strong>Ability:</strong> {this.props.pokemon.abilities[0].ability.name}</p>
                <p><strong>Weight:</strong> {this.props.pokemon.weight}</p>
                <p><strong>Height:</strong> {this.props.pokemon.height}</p>
            </div>
            <div className="column is-8">
              <Radar ref='chart' data={data} redraw={true} />
            </div>
          </div>
        </div>
      
      </section>
      
  	)
  }

};

export default PokemonCard

