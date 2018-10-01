import React from 'react'
import API from '../adapters/API'


class SignInForm extends React.Component {

  state = {
    username: '',
    password: ''
  }
}

handleSubmit = () => {
  const {username, password} = this.state
  const {signin} = this.props
}

API.signin(username, password)
  .then(data => {
    if (data.error) {
      console.log(data)
    } else {
      signin(data.username)
      localStorage.setItem('token', data.id)
    }
  })
}

handleChange = () => {
  this.setState({ [event.target.name]: event.target.value })
}

render () {
  const { username, password } = this.state
  const { handleChange, handleSubmit } = this

  return (
    <div>
      <TextField
        id='usernameInput'
        label='Username'
        value={username}
        onChange={handleChange}
        margin='normal'
        name='username'
      />
      <br />
      <TextField
        id='passwordInput'
        label='Password'
        value={password}
        onChange={handleChange}
        margin='normal'
        name='password'
        type='password'
      />
      <br />
      <Button>
      </Button> 
      </div>
    )
  }

export default SignInForm
