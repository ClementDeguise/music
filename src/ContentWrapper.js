import React, {useState, useEffect, useCallback} from 'react'
import PlaylistTumbnail from './Playlist-tumbnail'
import PlaylistTitle from './PlaylistTitle'
import './ContentWrapper.css'
import logo from './Images/logo.jpg'

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


		const trackrow = (function() {
			if(trig) {

				return (
					playlistdata.content.map((track,index) => 
						<tr>
							<td key={track.title + index}>{track.title}</td>
							<td key={track.artist + index}>{track.artist}</td>
						</tr>
					)
				)
				
			}
			else {
				return <tr></tr>
			}
		})







	return (
		<div className="content-wrapper">
			<PlaylistTumbnail source={logo}/>
			<PlaylistTitle content={trig && playlistdata.title}/>

			<table className="playlist-table">
				<thead>
					<tr>
		              <th>Track</th>
		              <th>Artist</th>
					</tr>
				</thead>	
				<tbody>
					{trackrow()}
				</tbody>
			</table>

		</div> 
		)
}


export default ContentWrapper