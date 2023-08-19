import React from 'react'
import Default from './layout/Default'


function Landing(props) {

    const pokemon = props.pokemon

  return (
    <Default>
      <div id='landingPage'>
        {/* <h1>POKEMON</h1> */}
        <div className="sloganBox">
          <img src="https://www.giantbomb.com/a/uploads/scale_super/0/1481/2897229-9939923796-latest" alt="slogan" className='slogan'/>
          <div className="dialogueBox">
            <p>
              {" "}Hello there! Welcome to the world of Pokémon.
              <br/>
              Once you capture wild Pokémon, enter them to the database.
            </p>
            <br/><br/>
            <a href="/pokemon" className='sloganTag'>
              <img src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png" alt="pokeball" className='pokeball'/>
              {" "}
              <span>
                Enter New Pokémon 
              </span>
              {" "}
              <img src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png" alt="pokeball" className='pokeball'/>
            </a>
          </div>
        </div>
      </div>
    </Default>
  )
}

export default Landing
