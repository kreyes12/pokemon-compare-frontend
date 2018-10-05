import React from 'react'
import API from '../../adapters/API'
import PokemonNames from '../../PokemonNames'

class NewPokemon extends React.Component {
    state= {
      open: true
    }

    setInput = () => {
      return PokemonNames.map(pokemon => <option key={pokemon.name} value={pokemon.name} />)
    }

    attributes = [
      'Nickname',
      'Level',
      'Nature',
      'Ability',
      'HP',
      'Attack',
      'Defence',
      'Special Attack',
      'Special Defence',
      'Speed'
    ]

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
      const pokemonData = {
        name: this.state.name,
        nickname: this.state.nickname,
        level: this.state.level,
        nature: this.state.nature,
        ability: this.state.ability,
        hp: this.state.hp,
        attack: this.state.attack,
        defence: this.state.defence,
        special_attack: this.state.special_attack,
        special_defence: this.state.special_defence,
        speed: this.state.speed
      }
      API.addPokemon(pokemonData)
      .then(data => {
        if (data.error) {
          console.log(data)
        } else {
          this.closeForm(event)
        }
      })
    }

    closeForm = (event) => {
      event.preventDefault()
      this.setState({ open: true })
    }

    openForm =() => {
      this.setState({ open: false })
    }

    render () {
      return (
        <div>
          <button className='button is-primary' onClick={this.openForm}>Add New Pokemon</button>
          <form >
            <div className={
              this.state.open
                ? 'modal'
                : 'modal is-active'
            }>
              <div className='modal-background' />
              <div className='modal-content'>

                <div className='field is-horizontal'>
                  <div className='field-label is-normal'>
                    <label className='label'>Species: </label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <div className='control'>
                        <input list='pokemon-names' name='name' className='input' onChange={this.handleChange} />
                        <datalist id='pokemon-names'>
                          {this.setInput()}
                        </datalist>

                      </div>
                    </div>
                  </div>
                </div>
                {
                  this.attributes.map(attributeName => {
                    return (
                      <div className='field is-horizontal'>
                        <div className='field-label is-normal'>
                          <label className='label'>{attributeName}</label>
                        </div>
                        <div className='field-body'>
                          <div className='field'>
                            <div className='control'>
                              <input className='input' name={
                                attributeName.toLowerCase().replace(' ', '_')
                              } type='text' onChange={this.handleChange} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                <button onClick={this.handleSubmit} className='button'>Submit</button>
              </div>
              <button className='modal-close is-large' aria-label='close' onClick={this.closeForm} />
            </div>
          </form>
        </div>
      )
    }
}

export default NewPokemon
