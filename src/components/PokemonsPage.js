import React from 'react'

class PokemonsPage extends React.Component {

  state = {
    pokemons: []
  }


  


componentDidMount () {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then (resp => resp.json())
    .then (pokemons => 
      pokemons.results.forEach((pokemon) => {
      fetch(pokemon.url)
      .then (resp => resp.json())
      .then (pokemon => console.log(pokemon))
    })
  )}


render () {
  return (
    <div>
      hi
    </div>
  )
}


}

export default PokemonsPage