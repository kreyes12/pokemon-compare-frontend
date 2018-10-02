import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
    const props = this.props
    return (
      <nav className='navbar is-transparent test' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a href='#' className='navbar-item'>
                Pokemon Compare
          </a>
          {props.currentUser && `Hello, Trainer ${props.currentUser}.`}
          {
            props.currentUser 
            ? <button onClick={props.logout}>LOGOUT</button>
            :             <React.Fragment>
                <Link to='/login'>
                  <button>LOGIN</button>
                </Link>
                <Link to='/register'>
                  <button>REGISTER</button>
                </Link>
              </React.Fragment>
          }
        </div>
        <div className='navbar-menu'>
          <a href='#' className='navbar-end' />
        </div>

      </nav>
    )
  }
}

export default NavBar
