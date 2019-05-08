import React, {useState} from 'react'
//import Image from './banner.jpg'

import './MenuButton.css'



function Header({ callback }) {

    const HeaderStyle = {

            padding: 75,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            textAlign: "center",
            position: "relative",
            background: "url('https://i.redd.it/b47lmjqrgrv21.jpg') center"
        }

    

    return (
		<header className="top-header" style={HeaderStyle}>
			<div className="menu-button">
                <button onClick={callback}>&#9776;Menu</button>
            </div>
	    </header>
	);
}
    

export default Header