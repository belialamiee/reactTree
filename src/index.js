import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './Title';
import LeftDiv from './LeftDiv'
import * as serviceWorker from './serviceWorker';
import RightDiv from "./RightDiv";

ReactDOM.render(<Title/>, document.getElementById('title'));

ReactDOM.render(<LeftDiv title="Left Side"/>, document.getElementById('left'));
ReactDOM.render(<RightDiv title="Right Side"/>, document.getElementById('right'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
