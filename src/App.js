import React, { Component } from 'react'

import Header from './components/Header.js'

import './App.css'
import PokemonsPage from './components/PokemonsPage.js'

class App extends Component {
  
  state = {
    currentUser: undefined
  }

  signin = username => {
    this.setState({currentUser: username})
    this.props.history.push('/users')
  }

  signout = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem('token')
  }

  
  render () {
    const { signin, signout } = this
    const { currentUser } = this.state
    return (
      <div>
        <Header currentUser={currentUser} signout={signout} />
        <PokemonsPage />

      </div>
    )
  }
}

export default App
