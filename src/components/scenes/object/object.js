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
        this.setState({id:this.props.id, name:this.props.name, parentId:this.props.parentId, new:this.props.new})
    }

    addObject = (e)=>{
        this.setState({name:e.target.value, new:false},()=>{
            axios({
                method: 'post',
                url: 'http://localhost:3300/addObject',
                data: {
                    parentId:this.state.parentId,
                    name:this.state.name
                }
            });
        })
    }

    deleteObject = ()=>{
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

    updateObject = (e)=>{
        this.setState({name:e.target.value, new:false},()=>{
            axios({
                method: 'post',
                url: 'http://localhost:3300/updateObject',
                data: {
                    name:this.state.name,
                    id:this.state.id,
                    parentId:this.state.parentId
                }
            })
        })
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
                        <i class="fas fa-edit" onClick={()=>{this.setState({new:"update"})}}></i>
                        <i class="fas fa-trash" onClick={()=>this.deleteObject()}></i>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div onDoubleClick={()=>{this.setState({new:"new"})}}>
                {this.renderObject()}
            </div>
        )
    }
}