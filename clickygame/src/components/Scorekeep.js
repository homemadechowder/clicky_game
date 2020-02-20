import React from 'react';

const style = {
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    height: '25vh'
}

function ScoreKeep(props){
    
    return(
       <div style = {style} className = "jumbotron jumbotron-fluid"> 
        <h1>Clicky Game v1.0</h1>
        <h2>{props.message}</h2>
        <h2>Your Score: {props.score} | Highest Record: {props.hiscore}</h2>
       </div>
    )
}

export default ScoreKeep