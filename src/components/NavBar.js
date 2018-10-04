import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
    const props = this.props
    return (
      <nav className='navbar is-transparent test' aria-label='main navigation'>
        <div className='navbar-brand'>
            <a href='#' className='navbar-item'>
                    <h1>Pokemon Compare</h1>
            </a>
        </div>
        <div className="navbar-start"></div>
        <div className="navbar-end">
            <div className="navbar-item">

            {props.currentUser && `Hello, Trainer ${props.currentUser}.`}
            
            {
                props.currentUser 
                ? <button className="button" onClick={props.logout}>LOGOUT</button>
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
        </div>
      </nav>
    )
  }
}

export default NavBar
