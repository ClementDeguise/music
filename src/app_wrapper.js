import React, {useState, useCallback, useEffect} from 'react'
import App from './App'
import Navbar from './components/Navbar'


export default function App_wrapper() {

	const [menuOpened, setMenuOpened] = useState(false);

	const menuCallback = useCallback(e => {setMenuOpened(true)},[]);
	const PlaylistMenuCallback = useCallback(prevMenuOpened => {
		setMenuOpened(!prevMenuOpened)},[]);
	//console.log(menuOpened);

	const TurnOffMenu = useCallback(e => {setMenuOpened(false)},[]);
	// since the menu button went up above the App where all logic is done, we need to pass it as a props along with the callback function



	return (
		<div className="App_wrapper">
			<Navbar callback={menuCallback} />
			<App menuOpened={menuOpened} playlistCallback={PlaylistMenuCallback} turnoff={TurnOffMenu}/>
		</div>
	)
	


}

