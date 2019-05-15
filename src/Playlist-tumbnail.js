import React from 'react'

function PlaylistTumbnail({source}) {


	return (
		<div className="playlist-tumbnail">
			<img className="playlist-image" src={source}/>
		</div> 
		)
}


export default PlaylistTumbnail