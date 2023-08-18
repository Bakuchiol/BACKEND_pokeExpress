import React from 'react'
import Default from './layout/Default'

function Edit(props) {
  return (
    <Default>
        <div id='editFormWrapper'>
            <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST" className='editForm'>
                <h2>Edit Pokemon Information</h2>
                <br />
                <div className="mainForm">
                    <div className="info">
                        <p>Name</p>
                        <br/>
                        <input type="text" name="name" defaultValue={pokemon.name} className='input'/>
                    </div>
                    <div className="info">
                        <p>Image</p>
                        <br/>
                        <input type="text" name="name" defaultValue={pokemon.img} className='input'/>
                    </div>
                        <br/>
                    <input type="submit" value="Submit Changes" className='button submit'/>
                </div>
            </form>
        </div>
    </Default>
  )
}

export default Edit
