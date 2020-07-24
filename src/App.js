import React from 'react';
import './App.css';

// import 

// importing components
import Scenes from './components/scenes/scenes'
import Files from './components/files/files'
import Inspector from './components/inspector/inspector'
import Container from './components/editor/container/container'



class App extends React.Component {
	render(){
		return (
			<div className="App">
				<Scenes/>
				<Files/>
				<Container/>
				<Inspector/>
			</div>
		);
	}
}

export default App;
