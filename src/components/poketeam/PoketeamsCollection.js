import React from 'react'
import PoketeamsCard from './PoketeamsCard'
import PoketeamCard from './PoketeamCard'

class PoketeamsCollection extends React.Component {
  state={

  }

  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-parent is-vertical'>
            { this.props.selectedPoketeam
              ? <PoketeamCard poketeam={this.props.selectedPoketeam}
                viewAllPoketeams={this.props.viewAllPoketeams}
                handleClick={this.props.handClick}
                updateStatePoketeam={this.props.updateStatePoketeam} 
                deletePoketeam={this.props.deletePoketeam} />
              : this.props.poketeams.map(singlePoketeam =>
                <div className='tile is-vertical box'>
                  <h1 className='tile is-12 is-child'><strong>{singlePoketeam.name}</strong></h1>
                  <PoketeamsCard showPoketeam={this.props.showPoketeam}
                    poketeam={singlePoketeam}
                    deletePoketeam={this.props.deletePoketeam} />
                </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default PoketeamsCollection
