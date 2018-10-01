class API {
  static signin (username, password) {
    return fetch(API.signinURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    }).then(resp => resp.json())
  }

  static validate (token) {
    return fetch(API.validateURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    }).then(resp => resp.json())
  }
}

API.baseURL = 'http://localhost:3001/api/v1'
API.signinURL = API.baseURL + '/signin'
API.validateURL = API.baseURL + '/validate'

export default API
