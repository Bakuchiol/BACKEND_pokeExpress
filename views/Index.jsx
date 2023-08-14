import React from 'react'

function Index(props) {

    const pokemon = props.pokemon

    const myStyle = {
        color: "crimson",
        backgroundColor: "#f5f5f5"
    };

    const aTag = {
        color: "royalblue",
        'textDecoration' : 'none'
    }

  return (
    <div>
      <h1 style={myStyle}>See All The Pokemon!</h1>
      {pokemon.map((poke,i) => {
          return (
            <ul  key={i}>
                <a href={`/pokemon/${i}`} style={aTag} key={i}>
                    <li key={i}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
                </a>
            </ul>
        )
      })}
      <br />
      <a href='/pokemon/new'>Add Pokemon</a>
    </div>
  )
}

export default Index
