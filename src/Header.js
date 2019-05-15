import React, {useState} from 'react'


import './MenuButton.css'



function Header({ callback }) {

    const HeaderStyle = {

            padding: 50,

            backgroundImage: `url(${require('./images/header_3.jpg')})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            textAlign: "center",
            position: "relative",

            overflow: "hidden"

        }

    

    return (
		<header className="top-header" style={HeaderStyle}>
            
			<div className="menu-button">
                <button className="menu-button" onClick={callback}>&#9776;Menu</button>
            </div>
            
	    </header>
	);
}
    

export default Header