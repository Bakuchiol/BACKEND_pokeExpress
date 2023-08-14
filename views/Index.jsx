import React from 'react'

function Index(props) {

    const pokemon = props.pokemon

    const myStyle = {
        color: "crimson",
        backgroundColor: "#f5f5f5"
    };

  return (
    <div>
      <h1 style={myStyle}>See All The Pokemon!</h1>
      <ul>
      {pokemon.map((poke,i) => {
        return (
            <li>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
        )
      })}
      </ul>
    </div>
  )
}

export default Index
