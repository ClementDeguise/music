import React, {useState, useCallback, useEffect, useLayoutEffect} from 'react'
import Header from './components/Header'
import PlaylistMenu from './components/PlaylistMenu'
import ContentWrapper from './components/ContentWrapper'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles';
//import './App.css'
//import jsonData from './fakeData'



function HomeView({menuOpened, playlistCallback, turnoff, formCb}) {

  /*const [menuOpened, setMenuOpened] = useState(false);

  const menuCallback = useCallback(e => {setMenuOpened(true)},[]);

  const PlaylistMenuCallback = useCallback(prevMenuOpened => {
     setMenuOpened(!prevMenuOpened)},[]);
    

  console.log(menuOpened);*/
  //select playlists first

  const [data, setData] = useState({ playlists: [] });
  const [playlistDisplayData, setPlaylistDisplayData] = useState([]);

  const [trigger, setTrigger] = useState(false);

  // hook used to fetch data, regular fetch used
  // also its possible to use async/await
  // https://scotch.io/tutorials/asynchronous-javascript-using-async-await

  useEffect(() => {

    fetch('https://api.myjson.com/bins/yffte')
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        setData(responseJson);
      });
  },[])


  // with axios
  /* 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://hn.algolia.com/api/v1/search?query=redux',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  */
  // the array at the end contains alls the variables that the hook will watch to know when to re render
  // is the array is empty, the hook will only render once

 // console.log(data);

  // NOTE
  //  Object.keys(MyObject).map((key) => MyObject[key]));
  // will create an array containing all values of the keys of the Object

  // mapping is for rendering the table rows components
  
  // hardcoded like a motherfucker
  // use no second argument
  const DisplayCallback = useCallback((id) => {   
    //console.log(id);
    
    //array
    //setPlaylistDisplayData(allowedState);
    setPlaylistDisplayData(data.playlists[id]);
    setTrigger(true);
    //setMenuOpened(false);
    turnoff();
    /*console.log(Object.keys(data.playlists[id]));
    console.log(data.playlists[id]);*/
    //console.log(playlistDisplayData);
  });

  //console.log(playlistDisplayData);
  //const DisplayCallback = ((id) => {console.log(id)});

  // for opacity but just on the app div
  // style={{backgroundColor: menuOpened ? "rgba(0,0,0,0.4)" : "white"}}



  return (

    <div>
      <PlaylistMenu open={menuOpened} playlists={data.playlists} playlistdisplay={DisplayCallback}/>

      <div className="app-dimmer" 
        onClick={playlistCallback}
        style={{
          visibility: menuOpened ? "visible" : "hidden",
          opacity: menuOpened ? "0.5" : "0"
          }}>
      </div>


      <div className="HomeView">

        <Header className="music-player"/>
        <hr className="player-hr" />

        <div className="upload-row-container">
          <div className="upload-button-container">
            <Fab color="secondary" size="small" onClick={formCb}><AddIcon /></Fab>
          </div>
        </div>


        <ContentWrapper playlistdata={playlistDisplayData} trig={trigger} />
      </div>
    </div>
  )
  

  
}

export default HomeView;
