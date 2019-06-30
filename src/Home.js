import React, {useState, useCallback, useEffect} from 'react'
import HomeView from './HomeView'
import Navbar from './components/Navbar'
import Form from './components/Form'
//import { Route, Switch } from 'react-router-dom';


export default function Home() {

	// variable will be re rendered on state update
	const [menuOpened, setMenuOpened] = useState(false);

	const [formKey, setFormKey] = useState(1);

	const menuCallback = useCallback(e => {setMenuOpened(true)},[]);
	const PlaylistMenuCallback = useCallback(prevMenuOpened => {
		setMenuOpened(!prevMenuOpened)},[]);
	//console.log(menuOpened);

	const TurnOffMenu = useCallback(e => {setMenuOpened(false)},[]);
	// since the menu button went up above the App where all logic is done, we need to pass it as a props along with the callback function

	const [formOpened, setFormOpened] = useState(false);


	// in order to reset the form every time we reopen it, we must not use useCallback, as it uses
	// a cached version of the variable, which differs from the current key.
	// changing keys is a good way to force a rerender
	const formCallback = (e) => {
		setFormOpened(true);
		setFormKey(formKey+1);
	};

	
	// using useCallback will use a cached version of formOpened, does not work, TBD
	const FormMenuCallback = function(e) {
		var className = e.target.className;
		if (className === "form-container") 
			setFormOpened(!formOpened);
		//setFormKey(formKey+1);
	};



	return (
		<div className="Home">

			<div className="form-container"
				style={{
		          visibility: formOpened ? "visible" : "hidden",
		          backgroundColor: formOpened ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)"
		      	}}
		      	onClick={FormMenuCallback}
		      	key={formKey}>
				<Form className="zi-form" />
			</div>

			<Navbar callback={menuCallback} />
			<HomeView menuOpened={menuOpened} playlistCallback={PlaylistMenuCallback} turnoff={TurnOffMenu} formCb={formCallback}/>
		</div>
	)
	


}

