import React from 'react'
import './scene.css'
import axios from 'axios'

export default class scene extends React.Component{
    constructor(){
        super()
        // console.log(this.props)
        this.state = {
            name: "",
            id: 0,
            new: false
        }
    }

    componentDidMount = ()=>{
        this.setState({id:this.props.id})
    }

    addScene = ()=>{
        axios({
            method: 'post',
            url: 'http://localhost:3300/addScene',
            // responseType: 'stream'
          })
            .then(function (response) {
              console.log(response)
            });
    }

    hideInput = (e)=>{
        // document.getElementById(("scene"+(this.id)))
        e.target.style.display = "none"
    }

    handleInputChange = (e)=>{
        this.setState({name:e.target.value})
    }

    render(){
        return(
            <div className="scene">
                <input type="text" key={"sceneInput" + (this.state.id)} onBlur={(e)=>{this.hideInput(e)}} onChange={(e)=>{this.handleInputChange(e)}}/>
                {this.state.name}
                <i class="fas fa-plus" onClick={()=>{this.addScene()}}></i>
            </div>
        )
    }
}