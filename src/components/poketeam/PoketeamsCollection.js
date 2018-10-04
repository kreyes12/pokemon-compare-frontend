import React from 'react'
import PoketeamsCard from './PoketeamsCard'
import PoketeamCard from './PoketeamCard'
import NewPoketeam from './NewPoketeam'

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
      <div>
        { !this.state.selectedPoketeam
          ? <NewPoketeam />
          : null
        }
        <div className='tile is-ancestor'>
          <div className='tile is-parent is-vertical'>
            { this.state.selectedPoketeam
              ? <PoketeamCard poketeam={this.state.selectedPoketeam} viewAllPoketeams={this.viewAllPoketeams} />
              : this.props.poketeams.map(singlePoketeam =>
                <div className='tile is-vertical box'>
                  <h1 className='tile is-12 is-child'><strong>{singlePoketeam.name}</strong></h1>
                  <PoketeamsCard showPoketeam={this.showPoketeam} poketeam={singlePoketeam} deletePoketeam={this.props.deletePoketeam} />
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default PoketeamsCollection
