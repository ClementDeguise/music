import React from 'react'
import PlaylistTumbnail from './Playlist-tumbnail'
import PlaylistTitle from './PlaylistTitle'
import PlaylistContent from './PlaylistContent'
import './ContentWrapper.css'

function ContentWrapper() {


	return (
		<div className="content-wrapper">
			<PlaylistTumbnail />
			<PlaylistTitle />
			<PlaylistContent />

		</div> 
		)
}


export default ContentWrapper