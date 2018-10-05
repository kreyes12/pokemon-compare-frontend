import React from 'react'
import API from '../../adapters/API'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

handleSubmit = (event) => {
  event.preventDefault()
  const { username, password } = this.state
  const { login } = this.props

  API.login(username, password)
    .then(data => {
      if (data.error) {
        console.log(data)
      } else {
        localStorage.setItem('token', data.token)
        login(data.user.username)
      }
    })
}

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}

render () {
  const { username, password } = this.state
  const { handleChange, handleSubmit } = this

  return (
    <div className="login container">
      <form onSubmit={handleSubmit}>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Username: </label> 
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input className="input"  type='text' name='username' onChange={handleChange} value={username} />
              </div>
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Password: </label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input className="input" type='password' name='password' onChange={handleChange} value={password} />
              </div>
            </div>
          </div>
        </div>
        <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <button className="button label is-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}
}

export default Login
