import React from 'react'
import Default from './layout/Default';

function Index(props) {

    const pokemon = props.pokemon

  return (
    <Default>
    <div id='indexWrapper'>
        <a href='/pokemon/new'>
            <h1  className='addNew'>Add New Pokemon!</h1>
        </a>
      <div className="pokemonList">
      <ul className='pokemonInfo'>
      {pokemon.map((poke,i) => {
          return (
            <div key={i} className="editPokemon">
                <a href={`/pokemon/${poke._id}`} key={i}>
                    <li>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
                </a>

                {/* edit */}
                <div className="editDelete">
                    <a href={`/pokemon/${poke._id}/edit`}>
                    <button className='button'>Edit</button>
                    </a>

                {/* delete */}
                <form action={`/pokemon/${poke._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" className='button'/>
                </form>
                </div>
            </div>
        )
    })}
    </ul>
      </div>
      </div>
    </Default>
    )
}

export default Index
