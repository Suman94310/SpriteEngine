import React from 'react'
import './scenes.css'
import PerfectScrollbar from 'perfect-scrollbar';
import Scene from './scene/scene'
import axios from 'axios'

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

        this.updateSceneList()
    }

    updateSceneList = ()=>{
        axios({
            method: 'post',
            url: 'http://localhost:3300/getScenes',
            // responseType: 'stream'
          }).then((res) =>{
            console.log(res)
            let newSceneList = []
            for(let i=0; i<res.data.length; i++){
                newSceneList.push(<Scene key={res.data[i]._id} id={res.data[i]._id} name={res.data[i].name} updateSceneList={this.updateSceneList} new={false}/>)
            }
            this.setState({sceneList:newSceneList})
        });
    }

    createScene = ()=>{
        let sceneRef = React.createRef()
        let sceneList = [...this.state.sceneList]
        sceneList.push(
        <li key={"sceneList"+(sceneList.length)}>
            <Scene key={"scene"+(sceneList.length)} id={sceneList.length} ref={sceneRef} updateSceneList={this.updateSceneList} new={"new"}/>
        </li>)
        this.setState({sceneList})
        this.state.sceneRefList.push(sceneRef)
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
                            {this.state.sceneList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}