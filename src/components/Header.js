import React, {useState} from 'react'

import './Player.css'

import Cat from '../images/cat.jpg'


import {IoMdPlay, IoMdPause, IoMdSkipBackward, IoMdSkipForward, IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeMute} from 'react-icons/io'
import Track from '../tracks/Riles-thank_god.mp3'
import Track2 from '../tracks/fakear chakra.mp3'
import AudioAnalyser from './AudioAnalyser'


class Header extends React.Component {

  constructor() {
    super();
    this.state={
      playing: false,
      currentTimeRaw: 0,
      durationRaw: 0,
      value: 0,
      seeking: false,
      done: false
    }
    this.switchAudioStream = this.switchAudioStream.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.displayDurationTime = this.displayDurationTime.bind(this);
    this.displayCurrentTime = this.displayCurrentTime.bind(this);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

  }

  /* IMPORTANT

  The embedded HTML player element allows easy loading, playing and pausing of audio HTML elements, as we used below.

  However, using the WEB AUDIO API for processing the signal will override the player properties. 
  As such, passing the audio file to the analyser without setting an output will overwrite the player, and the audio
  will not be played despite successful calls to player.play().

  Therefore we have to only use the Web Audio API and setup a gain node and output destination (speakers) in the analyser.

  BUT the player still works, for instance unpausing will still resume the file as it writes the audio element that is then passed to the analyser.

  */


  /* const HeaderStyle = {
            padding: 50,
            backgroundImage: `url(${require('./images/header_3.jpg')})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
    }*/


  componentDidMount() {
    this.player.src = Track;
    this.player.load();

    // specific event listener for video or audio time, JS built-in
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTimeRaw: e.target.currentTime,
        durationRaw: e.target.duration
      });
    });
  }


  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }





  turnOn() {
    this.player.play();
    //console.log("playing");
    this.setState({
      playing: true,
    })
  }

  turnPause() {
    this.player.pause();
    //console.log("pausing");
    this.setState({
      playing: false,
    })
  }


  getTime(time) {
  // NaN = Not a Number (eg null)
    if(!isNaN(time)) {
      return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    }
  }



  handleMouseDown() {
    this.setState({seeking: true})
  }
  handleMouseUp() {
    this.setState({seeking: false, done: true})
    
    //console.log("clicked")
  }

  

  handleChange(event) {

    const target = event.target;
    const value = target.value;
    this.setState({value: value})
    if (this.state.done) {
        this.player.currentTime = this.state.value;
        this.setState({done: false});
    }
    //console.log("changed")
  }




  displayCurrentTime() {
    return this.state.seeking ? this.getTime(this.state.value) : this.getTime(this.state.currentTimeRaw)
  }

  displayDurationTime() {
    return this.getTime(this.state.durationRaw)
  }




  switchAudioStream() {
    this.state.playing ? this.turnPause() : this.turnOn();
    //console.log(this.state.playing);
  }

  // add a reference in the audio to the html player element, which have methods to play and pause tracks (see first link above)

  // default slider duration : 100

  render() {


    let headerHeight = 100;

    //console.log(this.state.seeking)
    //console.log(this.state)


    return (

       
        <header className="top-header" style={{height: headerHeight}}>

            <div className="track-info">
                <div className="track-img-container">
                    <img id="track-img" alt="" src={Cat} />
                </div>

                <div className="track-text">
                    <span>SONG NAME Darude Sandstorm</span>
                </div>
            </div>

            <section className="play-options-container">

                <div className="play-container prev-track">
                    <IoMdSkipBackward className="player-button prev" />
                </div>

                <div className="play-container play-button" onClick={this.switchAudioStream}>
                    {this.state.playing ? <IoMdPause className="player-button pause" /> : <IoMdPlay className="player-button play" />}
                </div>

                <div className="play-container next-track">
                    <IoMdSkipForward className=" player-button next" />
                </div>


                <div className="currentTime-span">
                    <span>{this.displayCurrentTime()}</span>
                </div>

                <div className="progress-container">
                    <input
                        type="range"
                        name=""
                        min="0"
                        max={this.state.durationRaw}
                        value={this.state.seeking ? this.state.value : this.state.currentTimeRaw}
                        className="progress-bar"
                        onMouseDown={this.handleMouseDown}
                        onMouseUp={this.handleMouseUp}
                        onChange={this.handleChange}
                        
                        
                    />
                </div>

                <div className="duration-span">
                    <span>{this.displayDurationTime()}</span>
                </div>


                <div className="volume-buttons">
                    <IoMdVolumeHigh className="vol-btn-high" />
                </div>


            </section>

            <div>
                <audio ref={ref => (this.player = ref)} />
            </div>

            <div className="canvas-container">
                {this.state.playing ? <AudioAnalyser audio={document.querySelector('audio')} canvasHeight={headerHeight - 20}/> : ''}
            </div>

        </header>
    );
  }

}

    

export default Header