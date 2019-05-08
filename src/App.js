import React, {useState, useCallback, useContext} from 'react'
import Header from './Header'
import PlaylistMenu from './PlaylistMenu'
import ContentWrapper from './ContentWrapper'
import './App.css'




function App() {

  const [menuOpened, setMenuOpened] = useState(false);



  const menuCallback = useCallback(e => {setMenuOpened(true); console.log(menuOpened)},[])
  const PlaylistMenuCallback = useCallback(e => {setMenuOpened(false)},[])




  return (

    <div>
      <PlaylistMenu pmcallback={PlaylistMenuCallback} open={menuOpened}/>

      <div className="App" style={{backgroundColor: menuOpened ? "rgba(0,0,0,0.4)" : "white"}}>

        <Header callback={menuCallback}/>
        <ContentWrapper />
      </div>
    </div>
  )
  

  
}

export default App;
