import React from 'react'
import PoketeamsCollection from './PoketeamsCollection'
import API from '../../adapters/API'

class PoketeamsPage extends React.Component {
  state = {
    poketeams: []
  }

  deletePoketeam = (id) => {
    API.deletePoketeam(id)
      .then(data => {
        if (data.errors) {
          console.log(data)
        } else {
          let currPoketeams = this.state.poketeams.filter(pokemon => pokemon.id !== id)
          this.setState({ poketeams: currPoketeams })
        }
      })
  }

  componentDidMount () {
    API.getPoketeams()
      .then(poketeams => this.setState({ poketeams: poketeams }))
  }

  render () {
    return (
      <div>
        { this.state.poketeams.length === 0
          ? <p>You haven't added any Poketeams yet</p>
          : <PoketeamsCollection poketeams={this.state.poketeams} deletePoketeam={this.deletePoketeam} />
        }
      </div>

    )
  }
}

export default PoketeamsPage
