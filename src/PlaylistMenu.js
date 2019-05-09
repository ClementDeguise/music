import React, {useState, useEffect} from 'react'
import './PlaylistMenu.css'

/* receives Open from APP that recieved from header  */


function PlaylistMenu(props) {
    


    const [Playlists, setPlaylists] = useState([])

    // gotta iterate over the array, and explore the object
    // for mapping:  https://coursework.vschool.io/mapping-components-in-react/

    //an array of json objects (between {}) will still iterate and allow access to objects properties
    // re render on props changes, dont forget to initialize the const first

    // here for the parent to know which button has been pressed, the parent callback must accept the id as parameter,
    // then return a run of the parent function with the index through the props
    useEffect(() => {
        setPlaylists(props.playlists.map((playlist, index) => 
            <span id={index} key={playlist.title + index} onClick={() => props.playlistdisplay(index)}>{playlist.title}</span>
        ))
        },[props.playlists, props.playlistdisplay]);



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