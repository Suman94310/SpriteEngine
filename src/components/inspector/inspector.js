import React from 'react'
import './inspector.css'
import PerfectScrollbar from 'perfect-scrollbar';

export default class Inspector extends React.Component {
    componentDidMount=()=>{
        const ps = new PerfectScrollbar('#inspectors',{
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
    }

    handleInputChange = (data)=>{
        let argument = {
            parentId:this.props.selectedObject.state.parentId,
            name:this.props.selectedObject.state.name,
            position: (data.position)? {
                x: (data.position.x)? data.position.x:this.props.selectedObject.state.position.x,
                y: (data.position.y)? data.position.x:this.props.selectedObject.state.position.y
            }:{
                x: this.props.selectedObject.state.position.x,
                y: this.props.selectedObject.state.position.y
            }, 
            dimensions: (data.dimensions)? {
                x: (data.dimensions.x)? data.dimensions.x:this.props.selectedObject.state.dimensions.x,
                y: (data.dimensions.y)? data.dimensions.x:this.props.selectedObject.state.dimensions.y
            }:{
                x: this.props.selectedObject.state.dimensions.x,
                y: this.props.selectedObject.state.dimensions.y
            },
            sprite: this.props.selectedObject.state.sprite,
            id: this.props.selectedObject.state.id
        }
        console.log(argument)
        this.props.selectedObject.updateFunction("e",argument)
    }

    renderProperties = ()=>{
        // output.push(<div>{this.props.dimensions}</div>)
        if(this.props.selectedObject !== undefined){
            return(
                <div>
                    <div>
                        Dimensions
                        <hr/>
                        <div>
                            x: <input type="number" placeholder={this.props.selectedObject.state.dimensions.x} onBlur = {(e)=>{this.handleInputChange({dimensions:{x:e.target.value}})}}/>
                        </div>
                        <div>
                            y: <input type="number" placeholder={this.props.selectedObject.state.dimensions.y} onBlur = {(e)=>{this.handleInputChange({dimensions:{y:e.target.value}})}}/>
                        </div>
                    </div>
                    <div>
                        Positions
                        <hr/>
                        <div>
                            x: <input type="number" placeholder={this.props.selectedObject.state.position.x} onBlur = {(e)=>{this.handleInputChange({position:{x:e.target.value}})}}/>
                        </div>
                        <div>
                            y: <input type="number" placeholder={this.props.selectedObject.state.position.y} onBlur = {(e)=>{this.handleInputChange({position:{y:e.target.value}})}}/>
                        </div>
                        <div>
                            z: <input type="number" placeholder={this.props.selectedObject.state.position.z} onBlur = {(e)=>{this.handleInputChange({position:{z:e.target.value}})}}/>
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