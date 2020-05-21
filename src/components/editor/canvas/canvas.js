import React from 'react'
import './canvas.css'
import * as PIXI from 'pixi.js'
import { Viewport } from 'pixi-viewport'
import createAxis from './axis/axis'
import Matter from 'matter-js'


export default class Canvas extends React.Component{

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
        const viewport = new Viewport({
            screenWidth: document.getElementById("canvasContainer").offsetWidth,
            screenHeight: document.getElementById("canvasContainer").offsetHeight,
            worldWidth: 1000,
            worldHeight: 1000,

            interaction: app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
        })

        // add the viewport to the stage
        app.stage.addChild(viewport)

        // activate plugins
        viewport
            .drag()
            .pinch()
            .wheel()

        // creating axes
        createAxis(viewport, PIXI)
    }


    render(){
        return(
            <div className="canvasContainer" id="canvasContainer">
                
            </div>
        )
    }
}