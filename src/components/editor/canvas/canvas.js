import React from 'react'
import './canvas.css'
import * as PIXI from 'pixi.js'
import { Viewport } from 'pixi-viewport'
import Matter from 'matter-js'

import createAxis from './axis/axis'
import {createObjects, updateObjects} from './objects/objects'


export default class Canvas extends React.Component{

    constructor(){
        super()
        this.rendered = false
        this.objectsList = []
        this.viewport = undefined    
    }

    componentDidMount = ()=>{
        //creating pixi app
        const app = new PIXI.Application({
            width: document.getElementById("canvasContainer").offsetWidth,
            height: document.getElementById("canvasContainer").offsetHeight
        });

        //Inserting pixi app in  div
        document.getElementsByClassName("canvasContainer")[0].appendChild(app.view);

        //changing background
        app.renderer.backgroundColor = 0x4D4D4D;

        // create viewport
        this.viewport = new Viewport({
            screenWidth: document.getElementById("canvasContainer").offsetWidth,
            screenHeight: document.getElementById("canvasContainer").offsetHeight,
            worldWidth: 1000,
            worldHeight: 1000,

            interaction: app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
        })

        // add the viewport to the stage
        app.stage.addChild(this.viewport)

        // activate plugins
        this.viewport
            .drag()
            .pinch()
            .wheel()

        // creating axes
        createAxis(this.viewport, PIXI)

    }

    componentWillReceiveProps = (nextProps)=>{
        // creating objects for first time
        if(!this.rendered){
            setTimeout(()=>{createObjects(this.viewport, PIXI, this.props.objects, this.objectsList)},3000)
            this.rendered = true
        }
        updateObjects(this.viewport, PIXI, nextProps.objects, this.objectsList)
    }

    render(){
        return(
            <div className="canvasContainer" id="canvasContainer">
                
            </div>
        )
    }
}