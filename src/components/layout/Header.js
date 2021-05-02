import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header style={headerStyle}>
            <h1>To-Do List</h1>
            <button style={buttonStyle}><Link style={linkStyle} to="/">Start App</Link></button>  
        </header>    
    )
}

const headerStyle = {
    background: 'rgba(0,0,0,0.7)',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0px 10px 0px',
    maxWidth: '50%',
    margin: '0px auto 25px',
}

const linkStyle = {
    fontSize: '1rem',
    textDecoration: 'none'
}

const buttonStyle = {
    paddingTop: '5px',
    paddingBottom: '5px',    
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '15px',
    border: 'none',
}


export default Header;
