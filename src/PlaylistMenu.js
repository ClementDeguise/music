import React, {useState} from 'react'
import './PlaylistMenu.css'

/* receives Open from APP that recieved from header  */


function PlaylistMenu(props) {
    

    //const Playlists = props.playlists;
    //console.log(Playlists);


    // gotta iterate over the array, and explore the object
    // for mapping:  https://coursework.vschool.io/mapping-components-in-react/

    //an array of json objects (between {}) will still iterate and allow access to objects properties
     const Playlists = props.playlists.map((playlist, index) => 
        <span key={playlist.title + index}>{playlist.title}</span>
        )



	return (
        <div className="playlist-menu" 
        	 id="playlist-menu"
        	 style={{width: props.open ? 250 : 0}}>

	      <a href="javascript:void(0)" className="closebtn" onClick={props.pmcallback}>&times;</a>
          <span className="menutitle"><b>My Playlists</b></span>
          <div>{Playlists}</div>

	    </div>
    )
    
}



export default PlaylistMenu