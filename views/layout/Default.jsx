import React from 'react'

function Default(props) {
  return (
    <div>
      <html>
            <head>
                <link rel="stylesheet" href="/css/app.css" />  
                {/* <title>{props.title}</title> */}
                </head>
            <body>

                <div className="navBar">
                    <a href="/">
                        <img src="https://www.pokemon.co.jp/img/logo.png" alt="pokemon logo" className='pokeLogo'/>
                    </a>
                    {/* <div className="link">
                        <a href="/pokemon">
                            <img src="" alt="pokeball" className='pokeball'/>
                        </a>
                    </div> */}
                </div>



                <div>
                    {props.children}
                </div>
            </body>
        </html>
    </div>
  )
}

export default Default