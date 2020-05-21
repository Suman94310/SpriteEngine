import React from 'react'
import './tabs.css'

export default class Tabs extends React.Component {
    constructor(){
        super()
        this.state = {
            active:1
        }
    }

    componentDidMount = ()=>{
        this.switch(0)
        this.switch(1)
        // this.switch(0)
    }

    switch = (val)=>{
        this.setState({active:val})
        let tabs = document.getElementsByClassName("tabContainer")[0].getElementsByTagName("div")
        for(let i=0; i<tabs.length; i++){
            if(i===val){
                tabs[i].style.background = "#333B4F"
            }
            else{
                tabs[i].style.background = "#262C3B"
            }
        }

        if(val===0){
            document.getElementsByClassName("canvasContainer")[0].style.display = "grid"
            document.getElementsByClassName("codeContainer")[0].style.display = "none"
        }
        else{
            document.getElementsByClassName("canvasContainer")[0].style.display = "none"
            document.getElementsByClassName("codeContainer")[0].style.display = "grid"
        }
    }
    render(){
        return(
            <div className="tabContainer">
                <div id="scene" onClick = {()=>{this.switch(0)}}>Scene</div>
                <div id="code" onClick = {()=>{this.switch(1)}}>Code</div>
            </div>
        )
    }
}