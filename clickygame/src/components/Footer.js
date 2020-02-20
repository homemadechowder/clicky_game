import React from "react";

const footerStyle = {
    backgroundColor: 'lightblue',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding: '20px'
}

const textStyle = {
    fontSize: '100%'
}

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer() {
    return(
        <div style = {footerStyle} className = 'footer'>
            <h1 style = {textStyle} >Current Release : v1.0</h1>
            <h1 style = {textStyle} ><i class="fab fa-github-square"></i>homemadechowder</h1>
        </div>
    )
}

export default Footer;