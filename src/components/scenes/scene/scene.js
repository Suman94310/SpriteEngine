import React from 'react'
import './scene.css'
import axios from 'axios'
import Object from '../object/object'

export default class scene extends React.Component{
    constructor(){
        super()
        // console.log(this.props)
        this.state = {
            name: "",
            id: 0,
            new: false,
            objects:[]
        }
    }

    componentDidMount = ()=>{
        this.setState({id:this.props.id, name:this.props.name, new:this.props.new, parentId:this.props.parentId}, ()=>{this.getObjects()})
    }

    getObjects = ()=>{
        console.log("getting objects")
        if(this.state.new === false){
            axios({
                method: 'post',
                url: 'http://localhost:3300/getObjects',
                data: {
                    name:this.state.name,
                    parentId: this.state.id
                }
                // responseType: 'stream'
            }).then((response) =>{
                console.log(response.data)
                let temp = []
                for(let i=0; i<response.data.objects.length; i++){
                    temp.push(<Object name={response.data.objects[i].name} parentId={this.state.id} id={response.data.objects[i]._id} new={false} updateSelectedObject={this.props.updateSelectedObject} position={response.data.objects[i].position} dimensions={response.data.objects[i].dimensions}/>)
                }
                this.setState({objects:temp})
            });
        }
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
            url: 'http://localhost:3300/updateScene',
            data: {
                id:this.state.id,
                name:this.state.name
            }
            // responseType: 'stream'
        }).then((response) =>{
            this.props.updateSceneList()
        });
    }

    deleteScene = ()=>{
        // sending name to database
        axios({
            method: 'post',
            url: 'http://localhost:3300/deleteScene',
            data: {
                id:this.state.id,
            }
            // responseType: 'stream'
        }).then((response) =>{
            this.props.updateSceneList()
        });
    }

    handleInputChange = (e)=>{
        this.setState({name:e.target.value})
    }

    createObject = ()=>{
        let objectList = [...this.state.objects]
        objectList.push(
            <li key={objectList.length}>
                <Object parentId={this.state.id} new={"new"} updateSelectedObject={this.props.updateSelectedObject} />
            </li>
        )
        this.setState({objects:objectList})
        console.log("cyka")
    }

    renderScene = ()=>{
        if(this.state.new === "new"){
            return(
                <div className="scene">
                    <input type="text" key={"sceneInput" + (this.state.id)} onBlur={(e)=>{
                        this.addScene(e)
                        this.setState({ new:false })
                    }} onChange={(e)=>{this.handleInputChange(e)}}/>
                </div>
            )
        }
        else if(this.state.new === "update"){
            return(
                <div className="scene">
                    <input type="text" key={"sceneInput" + (this.state.id)} onBlur={(e)=>{
                        this.updateScene()
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
                        <i class="fas fa-edit" onClick={()=>{this.setState({new:"update"})}}></i>
                        <i class="fas fa-plus" onClick={()=>{this.createObject()}}></i>
                        <i class="fas fa-trash" onClick={()=>this.deleteScene()}></i>
                    </div>
                </div>
            )
        }
    }

    renderObjects = ()=>{
        return(
            <ul>
                {this.state.objects}
            </ul>
        )
    }

    render(){
        return(
            <li>
                {this.renderScene()}
                {this.renderObjects()}
            </li>
        )
    }
}