import React from 'react'


export default function Navbar({callback}) {





	return (

		<nav className="navbar">
			<div className="menu-button">
                <button className="menu-button" onClick={callback}>&#9776;Menu</button>
            </div>
						
		</nav>
	)




}