import React from 'react'

function Index(props) {

    const pokemon = props.pokemon

    const bg = {
        backgroundColor: "#f5f5f5",
        "textAlign": "center"
    }
    const center = {
        "listStyle" : "none"
    }
    const myStyle = {
        color: "crimson",
        "margin": "20px",
        "padding": "30px"
    };

    const aTag = {
        color: "royalblue",
        'textDecoration' : 'none',

    }

    const style = {
        color: "crimson",
        'textDecoration' : 'none',
        'marginLeft' : '20px',
    }

  return (
    <div style={bg}>
      <h1 style={myStyle}>See All The Pokemon!</h1>
      {pokemon.map((poke,i) => {
          return (
            <ul key={i} style={center}>
                <a href={`/pokemon/${i}`} style={aTag} key={i}>
                    <li key={i}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
                </a>
            </ul>
        )
      })}
      <br />
      <a href='/pokemon/new' style={style}>Add Pokemon</a>
    </div>
  )
}

export default Index
