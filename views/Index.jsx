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
        'margin' : '20px',
        "fontSize" : '20px'
    }

  return (
    <div style={bg}>
      <h1 style={myStyle}>See All The Pokemon!</h1>
      <ul style={center}>
      {pokemon.map((poke,i) => {
          return (
            <div key={i} className="editPokemon">
                <a href={`/pokemon/${poke._id}`} style={aTag} key={i}>
                    <li>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
                </a>

                {/* edit */}
                <div className="editDelete">
                    <a href={`/pokemon/${poke._id}/edit`}>
                    <button className='button'>Edit</button>
                    </a>
                </div>

                {/* delete */}
                <form action={`/pokemon/${poke._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" className='button'/>
                </form>
            </div>
        )
    })}
    </ul>
      <br />
      <a href='/pokemon/new' style={style}>Add Pokemon</a>
      </div>
      )
}

export default Index
