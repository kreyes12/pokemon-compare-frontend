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
      if (data.message) {
        return console.log(data)
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label> <br />
        <input type='text' name='username' onChange={handleChange} value={username} /> <br />
        <label>Password: </label> <br />
        <input type='password' name='password' onChange={handleChange} value={password} /> <br />
        <button>Login</button>
      </form>
    </div>
  )
}
}

export default Login
