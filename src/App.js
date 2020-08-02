import React from 'react';
import './App.css';

// import 

// importing components
import Scenes from './components/scenes/scenes'
import Files from './components/files/files'
import Inspector from './components/inspector/inspector'
import Container from './components/editor/container/container'



class App extends React.Component {

	constructor(){
		super()
		this.state = {
			selectedObject: undefined,
			selectedFile: undefined	
		}
	}

	updateSelectedObject = (selection)=>{
		this.setState({selectedObject: selection})
	}

	updateSelectedFile = (selection)=>{
		this.setState({selectedFile: selection})
	}

	render(){
		return (
			<div className="App">
				<Scenes updateSelectedObject={this.updateSelectedObject}/>
				<Files/>
				<Container/>
				<Inspector selectedObject={this.state.selectedObject}/>
			</div>
		);
	}
}

export default App;
