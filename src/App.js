import React, {useState, useCallback, useEffect, useLayoutEffect} from 'react'
import Header from './Header'
import PlaylistMenu from './PlaylistMenu'
import ContentWrapper from './ContentWrapper'
import './App.css'
//import jsonData from './fakeData'



function App() {

  const [menuOpened, setMenuOpened] = useState(false);

  const menuCallback = useCallback(e => {setMenuOpened(true)},[]);
  const PlaylistMenuCallback = useCallback(e => {setMenuOpened(false)},[]);

  //select playlists first

  const [data, setData] = useState({ playlists: [] });
  const [playlistDisplayData, setPlaylistDisplayData] = useState([]);

  const [trigger, setTrigger] = useState(false);

  // hook used to fetch data, regular fetch used
  // also its possible to use async/await
  // https://scotch.io/tutorials/asynchronous-javascript-using-async-await

  useEffect(() => {

    fetch('https://api.myjson.com/bins/wjpe2')
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

  //console.log(data.playlists);

  // NOTE
  //  Object.keys(MyObject).map((key) => MyObject[key]));
  // will create an array containing all values of the keys of the Object

  const [allowedState,setAllowedState] = useState([
    { id: 1, value: "Alabama" },
    { id: 2, value: "Georgia" },
    { id: 3, value: "Tennessee" }
  ]);

  // mapping is for rendering the table rows components
  
  // hardcoded like a motherfucker
  // use no second argument
  const DisplayCallback = useCallback((id) => {   
    console.log(id);
    
    //array
    //setPlaylistDisplayData(allowedState);
    setPlaylistDisplayData(data.playlists[id]);
    setTrigger(true);
    /*console.log(Object.keys(data.playlists[id]));
    console.log(data.playlists[id]);*/
    console.log(playlistDisplayData);
  });

  //console.log(playlistDisplayData);
  //const DisplayCallback = ((id) => {console.log(id)});


  return (

    <div>
      <PlaylistMenu pmcallback={PlaylistMenuCallback} open={menuOpened} playlists={data.playlists} playlistdisplay={DisplayCallback}/>

      <div className="App" style={{backgroundColor: menuOpened ? "rgba(0,0,0,0.4)" : "white"}}>

        <Header callback={menuCallback}/>
        <ContentWrapper playlistdata={playlistDisplayData} trig={trigger} />
      </div>
    </div>
  )
  

  
}

export default App;
