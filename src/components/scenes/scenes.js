import React from 'react'
import './scenes.css'
import PerfectScrollbar from 'perfect-scrollbar';
import Scene from './scene/scene'

export default class Scenes extends React.Component {
    constructor(){
        super()
        this.state = {
            sceneList : [],
            sceneRefList : []
        }
    }

    componentDidMount=()=>{
        const ps = new PerfectScrollbar('#scenes',{
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
    }

    createScene = ()=>{
        let sceneRef = React.createRef()
        let sceneList = [...this.state.sceneList]
        sceneList.push(
        <li key={"sceneList"+(sceneList.length)}>
            <Scene key={"scene"+(sceneList.length)} id={sceneList.length} ref={sceneRef}/>
        </li>)
        this.setState({sceneList})
        this.state.sceneRefList.push(sceneRef)
        document.addEventListener("click",(e)=>{
            if(true){
                console.log(e.target)
            }
            else{
                console.log("cyka")
            }
        })
    }

    render () {
        return (
            <div className = 'sceneContainer'>
                <div className="tab">Scene</div>
                <div className="container">
                    <div className="search">
                        <div className="add" onClick={()=>{this.createScene()}}>
                            <i className="fas fa-plus"></i>
                        </div>
                        <div className="searchBar">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="scenes" id="scenes">
                        <ul>
                            <li>
                                <Scene/>
                                <ul>
                                    <li>box1</li>
                                    <li>box1</li>
                                    <li>box1</li>
                                </ul>
                            </li>
                            {this.state.sceneList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}