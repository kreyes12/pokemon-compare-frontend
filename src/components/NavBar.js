import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
    const props = this.props
    return (
      <nav className='navbar is-transparent test' aria-label='main navigation'>
        <div className='navbar-brand'>
          <React.Fragment>
            <Link to='/'>
              <h1>Pokemon Compare</h1>
            </Link>
          </React.Fragment>
        </div>

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
                    <button>LOGIN</button>
                  </Link>
                  <Link to='/register'>
                    <button>REGISTER</button>
                  </Link>
                </React.Fragment>
            }
          </div>

        </div>
      </nav>
    )
  }
}

export default NavBar
