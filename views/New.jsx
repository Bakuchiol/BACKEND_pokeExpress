import React from 'react'

function New() {
  return (
    <div>
        <h1>Enter New Pokemon Information</h1>
      <form action="/pokemon" method="POST">
                 <label>Name:</label> 
                 <input type="text" name="name"/>
                 <br/>
                 <label>Generation:</label>
                  <input type="text" name="generation" />
                  <label>Image:</label>
                  <input type="text" name='img' placeholder='image URL'/>
                  <br/>
                 <input type="submit" name="" value="Add to Pokedex"/>
        </form>
    </div>
  )
}

export default New
