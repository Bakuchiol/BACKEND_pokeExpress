import React from 'react'
import Default from './layout/Default'

function Show(props) {

    const pokemon = props.pokemon

  return (
    <Default>
    <div id='showWrapper'>
      {/* <h1>Gotta Catch 'Em All!</h1> */}

      <div className="showPokemon">
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <br />
        <img src={pokemon.img + '.jpg'} alt="pokemon" className='pokemonImg'/>
      </div>

      <br />
      <div className="goBack">
        <a href='/pokemon' className='addNew'>Go Back</a>
      </div>
    </div>
    </Default>
  )
}

export default Show
