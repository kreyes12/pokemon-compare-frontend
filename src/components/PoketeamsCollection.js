import React from 'react'
import PoketeamsCard from './PoketeamsCard'
import PoketeamCard from './PoketeamCard'

class PoketeamsCollection extends React.Component {
  state={
    selectedPoketeam: false
  }

  viewAllPoketeams = () => {
    this.setState({ selectedPoketeam: false })
  }

  showPoketeam = (poketeam) => {
    this.setState({ selectedPoketeam: poketeam })
  }

  render () {
    return (
      <div className='container'>
        <div className='columns'>
          { this.state.selectedPoketeam
            ? <PoketeamCard poketeam={this.state.selectedPoketeam} viewAllPoketeams={this.viewAllPoketeams} />
            : this.props.poketeams.map(singlePoketeam => <PoketeamsCard showPoketeam={this.showPoketeam} poketeam={singlePoketeam} deletePoketeam={this.props.deletePoketeam} />) }
        </div>
      </div>
    )
  }
}

export default PoketeamsCollection
