import React from 'react'
import './inspector.css'
import PerfectScrollbar from 'perfect-scrollbar';

export default class Inspector extends React.Component {
    constructor(){
        super()
        this.state = {
            selected:false,
            parentId:undefined,
            name:undefined,
            position:{
                x: undefined,
                y: undefined
            },
            dimensions:{
                x: undefined,
                y: undefined
            },
            sprite: undefined,
            id: undefined
        }
    }
    
    componentDidMount=()=>{
        const ps = new PerfectScrollbar('#inspectors',{
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
    }

    componentWillReceiveProps=(nextProp)=>{
        if(nextProp.selectedObject){

            console.log("here blyat------------",nextProp.selectedObject.state.dimensions)
            this.setState({
                selected:true,
                parentId:nextProp.selectedObject.state.parentId,
                name:nextProp.selectedObject.state.name,
                position:{
                    x: nextProp.selectedObject.state.position.x,
                    y: nextProp.selectedObject.state.position.y
                }, 
                dimensions: {
                    x: nextProp.selectedObject.state.dimensions.x,
                    y: nextProp.selectedObject.state.dimensions.y
                },
                sprite: nextProp.selectedObject.state.sprite,
                id: nextProp.selectedObject.state.id
            })
        }
    }

    handleInputChange = (data)=>{
        this.setState({
            parentId:this.props.selectedObject.state.parentId,
            name:this.props.selectedObject.state.name,
            position: (data.position)? {
                x: (data.position.x)? data.position.x:this.props.selectedObject.state.position.x,
                y: (data.position.y)? data.position.y:this.props.selectedObject.state.position.y
            }:{
                x: this.props.selectedObject.state.position.x,
                y: this.props.selectedObject.state.position.y
            }, 
            dimensions: (data.dimensions)? {
                x: (data.dimensions.x)? data.dimensions.x:this.props.selectedObject.state.dimensions.x,
                y: (data.dimensions.y)? data.dimensions.y:this.props.selectedObject.state.dimensions.y
            }:{
                x: this.props.selectedObject.state.dimensions.x,
                y: this.props.selectedObject.state.dimensions.y
            },
            sprite: this.props.selectedObject.state.sprite,
            id: this.props.selectedObject.state.id
        })
    }

    handleInputBLur = ()=>{
        this.props.selectedObject.updateFunction("e",this.state)
        console.log(this.state)
        this.props.updateAppObjects([this.state], "update")
    }

    renderProperties = ()=>{
        // output.push(<div>{this.props.dimensions}</div>)
        if(this.state.selected){
            return(
                <div>
                    <div>
                        Dimensions
                        <hr/>
                        <div>
                            x: <input type="number" value={this.state.dimensions.x} onChange = {(e)=>{this.handleInputChange({dimensions:{x:e.target.value}})}} onBlur = {(e)=>{this.handleInputBLur({dimensions:{x:e.target.value}})}}/>
                        </div>
                        <div>
                            y: <input type="number" value={this.state.dimensions.y} onChange = {(e)=>{this.handleInputChange({dimensions:{y:e.target.value}})}} onBlur = {(e)=>{this.handleInputBLur({dimensions:{y:e.target.value}})}}/>
                        </div>
                    </div>
                    <div>
                        Positions
                        <hr/>
                        <div>
                            x: <input type="number" value={this.state.position.x} onChange = {(e)=>{this.handleInputChange({position:{x:e.target.value}})}} onBlur = {(e)=>{this.handleInputBLur({position:{x:e.target.value}})}}/>
                        </div>
                        <div>
                            y: <input type="number" value={this.state.position.y} onChange = {(e)=>{this.handleInputChange({position:{y:e.target.value}})}} onBlur = {(e)=>{this.handleInputBLur({position:{y:e.target.value}})}}/>
                        </div>
                        <div>
                            z: <input type="number" value={this.state.position.z} onChange = {(e)=>{this.handleInputChange({position:{z:e.target.value}})}} onBlur = {(e)=>{this.handleInputBLur({position:{z:e.target.value}})}}/>
                        </div>
                    </div>
                    <div>
                        Sprite
                        <hr/>
                        <div>
                            <input type="file"/>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render () {
        return (
            <div className = 'inspectorContainer'>
                <div className="tab">inspector</div>
                <div className="container">
                    <div className="search">
                        <div className="add">
                            <i className="fas fa-plus"></i>
                        </div>
                        <div className="searchBar">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="inspectors" id="inspectors">
                        <ul>
                            {this.renderProperties()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}