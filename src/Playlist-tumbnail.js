import React from 'react'

function PlaylistTumbnail({source}) {


	return (
		<div className="playlist-tumbnail">
			<img src={source} style={{width: 150, height: 150}}/>
		</div> 
		)
}


export default PlaylistTumbnail