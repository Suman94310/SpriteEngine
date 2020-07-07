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
        this.setState({id:this.props.id, name:this.props.name, new:this.props.new})
    }

    addScene = ()=>{
        // sending name to database
        axios({
            method: 'post',
            url: 'http://localhost:3300/addScene',
            data: {
                name:this.state.name
            }
            // responseType: 'stream'
        }).then((response) =>{
            this.props.updateSceneList()
        });
    }

    updateScene = ()=>{
        // sending name to database
        axios({
            method: 'post',
            url: 'http://localhost:3300/udpateScene',
            data: {
                name:this.state.name
            }
            // responseType: 'stream'
        }).then((response) =>{
            this.props.updateSceneList()
        });
    }

    hideInput = (e)=>{

        e.target.style.display = "none"

        // sending name to database
        axios({
            method: 'post',
            url: 'http://localhost:3300/addScene',
            data: {
                name:this.state.name
            }
            // responseType: 'stream'
        }).then((response) =>{
            this.props.updateSceneList()
        });

    }

    handleInputChange = (e)=>{
        this.setState({name:e.target.value})
    }

    renderScene = ()=>{
        if(this.state.new){
            return(
                <div className="scene">
                    <input type="text" key={"sceneInput" + (this.state.id)} onBlur={(e)=>{
                        this.hideInput(e)
                        this.setState({ new:false })
                    }} onChange={(e)=>{this.handleInputChange(e)}}/>
                </div>
            )
        }
        else{
            return(
                <div className="scene">
                    {this.props.name}
                    <div>
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-plus" onClick={()=>{this.addScene()}}></i>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderScene()}
            </div>
        )
    }
}