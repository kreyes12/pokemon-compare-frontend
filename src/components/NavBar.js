import React from 'react'
import { Link } from 'react-router-dom'
import pokeball from '../pokeball.png'

class NavBar extends React.Component {
  render () {
    const props = this.props
    return (
      <nav className='navbar is-transparent test' aria-label='main navigation'>
        <div className='navbar-brand'>
          <React.Fragment>
            <Link to='/pokemon'>
              <img className='navbar-brand' src={pokeball} alt='pokeIcon' />
            </Link>
          </React.Fragment>
        </div>
        <div className='navbar-start' />
        <div className='navbar-end'>
          <div className='navbar-item'>

            <div className='navbar-start' />

            <div className='navbar-end'>

              <div className='navbar-item'>
                <React.Fragment>
                  <Link to='/pokemon'>
                    <h1>Pokemon</h1>
                  </Link>
                </React.Fragment>
              </div>

              <div className='navbar-item'>
                <React.Fragment>
                  <Link to='/poketeams'>
                    <h1>Poketeam</h1>
                  </Link>
                </React.Fragment>
              </div>

              <div className='navbar-item'>
                {props.currentUser && `Hello, Trainer ${props.currentUser}.`}
              </div>

              <div className='navbar-item'>
                {
                  props.currentUser
                    ? <button className='button' onClick={props.logout}>LOGOUT</button>
                    : <React.Fragment>
                      <Link to='/login'>
                        <button className="button is-primary">Login</button>
                      </Link>
                      <Link to='/register'>
                        <button className="button is-info">Register</button>
                      </Link>
                    </React.Fragment>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
