import React from 'react'

const PokemonsCard = (props) => {

return(
    <div className="card column is-4">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Pokemon-sprite"/>
            </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{props.pokemon.nickname}</p>
          <p className="subtitle is-6">{props.pokemon.name}</p>
        </div>
  
    </div>

)
}

export default PokemonsCard