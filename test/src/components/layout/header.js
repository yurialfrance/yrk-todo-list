import React from 'react'
import {Link} from "react-router-dom";

function Header (){
    return(
        <header style={headerStyle}>
            <h1>YRK Todo List</h1>
            <h4>やることリスト</h4>
            <Link to="/ReactApp" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )
}

const headerStyle = {
        background: '#eb0c52',
        color: 'white',
        textAlign: 'center',
        padding: '10px'
    
};

const linkStyle = {
    color:"#ffff",
    textDecoration:"none"
}

export default Header;