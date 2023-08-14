import React from 'react'

function Index({pokemon}) {

    // const pokemon = props.pokemon

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
        'margin' : '20px',
        "fontSize" : '20px'
    }

  return (
    <div style={bg}>
      <h1 style={myStyle}>See All The Pokemon!</h1>
      <ul style={center}>
      {pokemon.map((poke,i) => {
          return (
                <a href={`/pokemon/${i}`} style={aTag} key={i}>
                    <li>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
                </a>
        )
    })}
    </ul>
      <br />
      <a href='/pokemon/new' style={style}>Add Pokemon</a>
    </div>
  )
}

export default Index
