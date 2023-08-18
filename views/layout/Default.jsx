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
                <div className="link">
                    <a href="/pokemon">all pokemon</a>
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