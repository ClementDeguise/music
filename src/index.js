import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_wrapper from './app_wrapper';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App_wrapper />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
