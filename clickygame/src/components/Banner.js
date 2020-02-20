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
            <p className="lead">Game plan: </p>
            <hr className="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
        </div>
    )
}

export default Banner;