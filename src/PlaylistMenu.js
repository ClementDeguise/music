import React, {useState} from 'react'
import './PlaylistMenu.css'

/* receives Open from APP that recieved from header  */


class PlaylistMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    
    render() {

    	return (
	        <div className="playlist-menu" 
	        	 id="playlist-menu"
	        	 style={{width: this.props.open ? 250 : 0}}>

		      <a href="javascript:void(0)" className="closebtn" onClick={this.props.pmcallback}>&times;</a>
		      <a href="#">Rap</a>
		      <a href="#">Chill</a>
		      <a href="#">Reggae</a>
		      <a href="#">Electro</a>
		    </div>
        )
    }
}



export default PlaylistMenu