import React from 'react';
import './App.css';

// import 

import axios from 'axios'

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
			selectedFile: undefined,
			objects: []	
		}
	}

	// componentDidMount = ()=>{
	// 	this.addAppObjects(undefined)
	// }

	updateSelectedObject = (selection)=>{
		this.setState({selectedObject: selection})
	}

	updateSelectedFile = (selection)=>{
		this.setState({selectedFile: selection})
	}

	updateAppObjects = (objects,tag)=>{
		console.log(objects,tag)
		if(tag==="insert"){
			let newList = [...this.state.objects]
			for(let i=0; i<objects.length; i++){
				objects[i].id = objects[i]._id
				newList.push(objects[i])
			}
			this.setState({objects:newList})
		}
		if(tag==="delete"){
			let newList = [...this.state.objects]
			for(let i=0; i<newList.length; i++){
				console.log(objects[0]._id, newList[i]._id)
				if(objects[0].id === newList[i].id){
					newList.splice(i,1)
				}
			}
			this.setState({objects:newList})
		}
		if(tag==="update"){
			let newList = [...this.state.objects]
			for(let i=0; i<newList.length; i++){
				if(objects[0].id === newList[i]._id || objects[0].id === newList[i].id){
					newList[i] = objects[0]
				}
			}
			this.setState({objects:newList})
		}
	}

	render(){
		return (
			<div className="App">
				<Scenes updateSelectedObject={this.updateSelectedObject} addAppObjects={this.addAppObjects} updateAppObjects={this.updateAppObjects}/>
				<Files/>
				<Container objects={this.state.objects}/>
				<Inspector selectedObject={this.state.selectedObject} updateAppObjects={this.updateAppObjects}/>
			</div>
		);
	}
}

export default App;
