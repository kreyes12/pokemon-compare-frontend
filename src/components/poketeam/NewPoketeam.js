import React from 'react'
import API from '../../adapters/API'
import { Route, withRouter } from 'react-router-dom'

class NewPoketeam extends React.Component {
    state= {
      open: true,
      name: ''
    }

    toggleForm = () => {
      this.setState({ open: !this.state.open })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      API.addPoketeam(this.state.name)
        .then(data => {
          if (data.error) {
            console.log(data)
          } else {
            this.toggleForm()
            this.props.history.push('/poketeams')
          }
        })
    }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
    }

    render () {
      return (
        <div>
          <button className='button' onClick={this.toggleForm}>Add New Poketeam</button>
          <form onSubmit={this.handleSubmit}>
            <div className={
              this.state.open
                ? 'modal'
                : 'modal is-active'
            }>
              <div className='modal-background' />
              <div className='modal-content'>

                <div className='field is-horizontal'>
                  <div className='field-label is-normal'>
                    <label className='label'>Poketeam Name: </label>
                  </div>
                  <div className='field-body'>
                    <div className='field'>
                      <div className='control'>
                        <input className='input' name='name' type='text' onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                </div>
                <button className='button'> Submit</button>
              </div>
              <button className='modal-close is-large' aria-label='close' onClick={this.toggleForm} />
            </div>
          </form>
        </div>
      )
    }
}

export default withRouter(NewPoketeam)
