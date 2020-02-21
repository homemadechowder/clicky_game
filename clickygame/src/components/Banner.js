import React from 'react';

const style = {
    backgroundImage: "url(https://wallpaperaccess.com/full/11795.jpg)",
    marginTop: '-20px',
    color: 'white'
}

function Banner(){
    return(
        <div style = {style} className = 'jumbotron'>
            <h1 className="display-4">Clicky Game v1.0</h1>
        </div>
    )
}

export default Banner;