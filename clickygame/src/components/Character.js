import React from "react";
import Radium from "radium";



const cardStyle = {
    base:{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        border: '10px white solid',
        transition: 'transform .2s',
        height: '200px',
        width: '200px',
        float: 'left',
        margin: '20px',
        
        ':hover':{
            transform: 'scale(1.1)'
        }
    }
}

const imgStyle = {
    objectFit: 'cover',
    width: '180px',
    height: '180px'
}

function Character(props) {
  return (
    <div style = {cardStyle.base} onClick={()=>{props.shuffle(); props.clicked(props.id);}}  className="card">
        <img style = {imgStyle} className="card-img-top"key = {props.key} value = {props.value} alt = 'something' src={props.image}></img>     
    </div>
  );
}

export default Radium(Character);