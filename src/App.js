import React, {useState, useCallback, useEffect} from 'react'
import Header from './Header'
import PlaylistMenu from './PlaylistMenu'
import ContentWrapper from './ContentWrapper'
import './App.css'
//import jsonData from './fakeData'



function App() {

  const [menuOpened, setMenuOpened] = useState(false);

  const menuCallback = useCallback(e => {setMenuOpened(true)},[menuOpened]);
  const PlaylistMenuCallback = useCallback(e => {setMenuOpened(false)},[]);

  //select playlists first

  const [data, setData] = useState({ playlists: [] });


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


  // mapping is for rendering the table rows components
  




  return (

    <div>
      <PlaylistMenu pmcallback={PlaylistMenuCallback} open={menuOpened} playlists={data.playlists}/>

      <div className="App" style={{backgroundColor: menuOpened ? "rgba(0,0,0,0.4)" : "white"}}>

        <Header callback={menuCallback}/>
        <ContentWrapper />
      </div>
    </div>
  )
  

  
}

export default App;
