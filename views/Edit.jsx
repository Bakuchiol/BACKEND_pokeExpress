import React from 'react'
import Default from './layout/Default'

function Edit(props) {
    
    const pokemon = props.pokemon

  return (
    <Default>
        <div id='editFormWrapper'>
            <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST" className='editForm'>
                <h2>Edit Pokemon Information</h2>
                <br />
                <div className="mainForm">
                    <div className="info">
                        Name
                        <br/>
                        <input type="text" name="name" defaultValue={pokemon.name} className='input'/>
                    </div>
                    <div className="info">
                        Image
                        <br/>
                        <input type="text" name="img" defaultValue={pokemon.img} className='input'/>
                    </div>
                        <br/>
                    <input type="submit" value="Submit Changes" className='button submit'/>
                </div>
            </form>
        </div>
        <div className="goBack newBack">
            <a href='/pokemon' className='addNew'>Go Back</a>
        </div>
    </Default>
  )
}

export default Edit
