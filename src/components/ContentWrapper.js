import React, {useState, useEffect, useCallback} from 'react'
import PlaylistTumbnail from './Playlist-tumbnail'
import PlaylistTitle from './PlaylistTitle'
import TableRow from './TableRow'

import '../Content.css'

import logo from '../images/logo.jpg'

function ContentWrapper({ playlistdata, trig }) {



/*	const [title,setTitle] = useState("");
	const [trackrow,setTrackRow] = useState([]);


		useEffect((trig) => {
		setTitle(playlistdata.title);
		},[playlistdata]);
	


	useEffect((trig) => {
		setTrackRow(playlistdata.content.map((track,index) => 
			<tr>
				<td key={track.title + index}>{track.title}</td>
				<td key={track.artist + index}>{track.artist}</td>
			</tr>
		))
		},[playlistdata]);*/

	// <td key={track.artist + index}>{track.artist}</td>

	const trackrow = (function() {
		if(trig) {

			return (
				playlistdata.content.map((track,index) => 
					<TableRow key={index} track={track} index={index}/>
				)
			)
			
		}
		else {
			return <div></div>
		}
	})


	const Title = () => { return playlistdata.title.toUpperCase();}





	return (
		<div className="content-wrapper">

			<div className="playlist-header">
				<PlaylistTumbnail source={logo}/>
				<PlaylistTitle content={trig && Title()}/>
			</div>

			<div className="table-container">
				{trackrow()}
				<hr className="table-hr-light" size='1'/>
			</div>
		</div> 
		)
}


export default ContentWrapper