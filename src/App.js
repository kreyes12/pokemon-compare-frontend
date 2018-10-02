import React, { Component } from 'react'



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
        
        <PokemonsPage />

      </div>
    )
  }
}

export default App
