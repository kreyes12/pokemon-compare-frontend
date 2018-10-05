import { get } from 'https'

class API {
  // USER API CALLS
  static login (username, password) {
    return fetch(API.loginURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    }).then(resp => resp.json())
  }

  static validate (token) {
    return fetch(API.validateURL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then(resp => resp.json())
  }

  static register (username, password) {
    return fetch(API.registerURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    }).then(resp => resp.json())
  }

  // POKEMON API CALLS
  static getPokemon () {
    const token = localStorage.getItem('token')
    return fetch(API.pokemonsURL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
  }

  static deletePokemon (pokemonId) {
    const token = localStorage.getItem('token')
    return fetch(API.pokemonsURL + `/${pokemonId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
  }

  static addPokemon (obj) {
    return fetch(API.baseURL + `/pokemons/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  // POKETEAM API CALLS
  static getPoketeams () {
    const token = localStorage.getItem('token')
    return fetch(API.poketeamsURL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
  }

  static getPoketeam (poketeamId) {
    const token = localStorage.getItem('token')
    return fetch(API.poketeamsURL + `/${poketeamId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
  }

  static addPoketeam (name) {
    const token = localStorage.getItem('token')
    return fetch(API.poketeamsURL + '/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ name: name })
    })
      .then(resp => resp.json())
  }

  static updatePoketeam (pokeTeamId, name, pokemonIds) {
    const token = localStorage.getItem('token')
    return fetch(API.poketeamsURL + `/${pokeTeamId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        pokemonIds
      })
    })
      .then(resp => resp.json())
  }

  static deletePoketeam (poketeamId) {
    const token = localStorage.getItem('token')
    return fetch(API.poketeamsURL + `/${poketeamId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
  }
}

API.baseURL = 'http://localhost:3000/api/v1'

API.registerURL = API.baseURL + '/register'
API.loginURL = API.baseURL + '/login'
API.validateURL = API.baseURL + '/validate'

API.pokemonsURL = API.baseURL + '/pokemons'

API.poketeamsURL = API.baseURL + '/poketeams'

export default API
