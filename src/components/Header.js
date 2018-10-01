import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'

const Header = props =>
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <h1 className='App-title'>
      Welcome to React
      { props.currentUser && `, ${props.currentUser}.` }
    </h1>
    {
      props.currentUser ?
        <button onClick={props.signout}>SIGN OUT</button> :
        <Link to='/signin'>
          <button>SIGN IN</button>
        </Link>
    }
  </header>

export default Header
