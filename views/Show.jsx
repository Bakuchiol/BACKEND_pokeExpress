import React from 'react'

function Show(props) {

    const pokemon = props.pokemon
    // const pokemonName = props.pokemon.name
    // const pokemonImg = props.pokemon.img + '.jpg'

    const style = {
        color: "crimson",
        'textDecoration' : 'none'
    }

  return (
    <div>
      <h1>Gotta Catch 'Em All!</h1>
      {/* <h2>
        {pokemonName.charAt(0).toupperCase() + pokemonName.slice(1)}
      </h2>
      <img src={pokemonImg} alt="pokemon" /> */}
      
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <img src={pokemon.img + '.jpg'} alt="pokemon" />

      <br />
      <a href='/pokemon' style={style}>Go Back</a>
    </div>
  )
}

export default Show
