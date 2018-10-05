import React from 'react'
import PoketeamsCollection from './PoketeamsCollection'
import API from '../../adapters/API'
import NewPoketeam from './NewPoketeam'
import { Route, withRouter } from 'react-router-dom'

class PoketeamsPage extends React.Component {
  state = {
    poketeams: [],
    selectedPoketeam: false
  }

  updateStatePoketeam = (poketeam) => {
    let newPoketeams = [...this.state.poketeams]
    let index = newPoketeams.findIndex(currPoketeam => currPoketeam.id === poketeam.id)
    newPoketeams[index] = poketeam
    this.setState({ poketeams: newPoketeams })
  }

  deletePoketeam = (id) => {
    API.deletePoketeam(id)
      .then(data => {
        if (data.errors) {
          console.log(data)
        } else {
          let currPoketeams = this.state.poketeams.filter(pokemon => pokemon.id !== id)
          this.setState({ poketeams: currPoketeams })
          this.props.history.push('/poketeams')
        }
      })
  }

  viewAllPoketeams = () => {
    this.setState({ selectedPoketeam: false })
  }

  showPoketeam = (poketeam) => {
    this.setState({ selectedPoketeam: poketeam })
  }

  componentDidMount () {
    API.getPoketeams()
      .then(poketeams => this.setState({ poketeams: poketeams }))
  }

  render () {
    return (
      <div>
        { !this.state.selectedPoketeam
          ? <NewPoketeam />
          : null
        }
        { this.state.poketeams.length === 0
          ? <p>You haven't added any Poketeams yet</p>
          : <PoketeamsCollection poketeams={this.state.poketeams}
            deletePoketeam={this.deletePoketeam}
            viewAllPoketeams={this.viewAllPoketeams}
            showPoketeam={this.showPoketeam}
            selectedPoketeam={this.state.selectedPoketeam}
            updateStatePoketeam={this.updateStatePoketeam} />
        }
      </div>

    )
  }
}

export default withRouter(PoketeamsPage)
