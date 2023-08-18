import React from 'react'

function New() {
  return (
    <div id='editFromWrapper'>
        <h1>Enter New Pokemon Information</h1>
        <form action="/pokemon" method="POST" className='editForm'>
          <h2>Enter New Pokemon Information</h2>
          <br />
          <div className="mainForm">
            <div className="info">
                 Name
                 <br/>
                 <input type="text" name="name" className='input'/>
            </div>
            <div className="info">
                  Image
                  <br/>
                  <input type="text" name='img' placeholder='image URL' className='input'/>
            </div>
          </div>
          <br/>
                 <input type="submit" name="" value="Add to Pokedex"/>
        </form>
    </div>
  )
}

export default New
