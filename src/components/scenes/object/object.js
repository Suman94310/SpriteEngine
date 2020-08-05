import React from "react"
import "./object.css"
import axios from "axios"

export default class object extends React.Component{

    constructor(){
        super()
        this.state = {
            name:"test",
            id:0,
            position:{x:0,y:0},
            dimensions:{x:10,y:10},
            sprite:"url of box",
            new:"new",
            parentId:1
        }
    }
    
    componentDidMount = ()=>{
        this.setState({
            id:this.props.id, 
            name:this.props.name, 
            parentId:this.props.parentId, 
            new:this.props.new, 
        })
        if(this.props.dimensions){
            this.setState({dimensions: this.props.dimensions})
        }
        if(this.props.position){
            this.setState({position: this.props.position})
        }
    }

    addObject = (e)=>{
        this.setState({name:e.target.value, new:false},()=>{
            axios({
                method: 'post',
                url: 'http://localhost:3300/addObject',
                data: {
                    parentId:this.state.parentId,
                    name:this.state.name,
                    position: this.state.position,
                    dimensions: this.state.dimensions,
                    sprite: this.state.sprite
                }
            }).then((response)=>{
                this.setState({id:response.data})
                this.props.updateAppObjects([this.state],"insert")
            });
        })
    }

    deleteObject = ()=>{
        this.props.updateAppObjects([this.state],"delete")
        this.setState({new:"deleted"})
        axios({
            method: 'post',
            url: 'http://localhost:3300/deleteObject',
            data: {
                name:this.state.name,
                id:this.state.id,
                parentId:this.state.parentId
            }
        });
        
    }

    updateObject = (e, argument=false)=>{
        if(argument){
            this.setState(
                {
                    parentId:argument.parentId,
                    name:argument.name,
                    position: argument.position,
                    dimensions: argument.dimensions,
                    sprite: argument.sprite,
                    id:argument.id
                }
                ,()=>{
                    this.props.updateAppObjects([this.state],"update")
                    axios({
                        method: 'post',
                        url: 'http://localhost:3300/updateObject',
                        data: {
                            parentId:argument.parentId,
                            name:argument.name,
                            position: argument.position,
                            dimensions: argument.dimensions,
                            sprite: argument.sprite,
                            id:argument.id
                        }
                    })
            })
        }
        else{
            this.setState({name:e.target.value, new:false},()=>{
                axios({
                    method: 'post',
                    url: 'http://localhost:3300/updateObject',
                    data: {
                        parentId:this.state.parentId,
                        name:this.state.name,
                        position: this.state.position,
                        dimensions: this.state.dimensions,
                        sprite: this.state.sprite,
                        id: this.state.id
                    }
                })
            })
        }
    }

    renderObject = ()=>{
        if(this.state.new === "new"){
            return(
                <div className="object">
                    <input type="text" onBlur={(e)=>{this.addObject(e)}}/>
                </div>
            )
        }
        else if (this.state.new === "update"){
            return(
                <div className="object" >
                    <input type="text" onBlur={(e)=>{this.updateObject(e)}}/>
                </div>
            )
        }
        else if (this.state.new === "deleted"){
            return(
                <div></div>
            )
        }
        else{
            return(
                <div className="object">
                    {this.state.name}
                    <div>
                        <i className="fas fa-edit" onClick={()=>{this.setState({new:"update"})}}></i>
                        <i className="fas fa-trash" onClick={()=>this.deleteObject()}></i>
                    </div>
                </div>
            )
        }
    }

    render(){
        if(this.state.new==="new"){
            return(
                <div onDoubleClick={()=>{this.setState({new:"update"})}}>
                    {this.renderObject()}
                </div>
            )
        }
        else{
            return(
                <div onDoubleClick={()=>{this.setState({new:"update"})}} onClick={()=>{this.props.updateSelectedObject({state:this.state,updateFunction:this.updateObject})}}>
                    {this.renderObject()}
                </div>
            )
        }
        
    }
}