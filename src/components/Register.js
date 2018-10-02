import React from 'react'
import API from '../adapters/API'

class Register extends React.Component {
    state = {
      username: '',
      password: ''
    }

    handleSubmit = () => {
      const { username, password } = this.state

      API.register(username, password)
        .then(data => {
          if (data.error) {
            console.log(data)
          } else {
            console.log('Success! Now Login')
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
          <form>
            <label>Username: </label> <br />
            <input type='text' name='username' onChange={handleChange} value={username} /> <br />
            <label>Password: </label> <br />
            <input type='password' name='password' onChange={handleChange} value={password} /> <br />
          </form>
          <button onClick={handleSubmit}>Register</button>
        </div>
      )
    }
}

export default Register
