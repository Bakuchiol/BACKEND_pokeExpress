import React from 'react'
import Default from './layout/Default'

function New() {
  return (
    <Default>
    <div id='editFormWrapper'>
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
                 <input type="submit" name="" value="Add to Pokedex" className='button submit'/>
        </form>
    </div>
      <div className="goBack newBack">
        <a href='/pokemon' className='addNew'>Go Back</a>
      </div>
    </Default>
  )
}

export default New
