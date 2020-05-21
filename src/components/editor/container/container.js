import React from 'react'
import Tabs from '../tabs/tabs'
import Canvas from '../canvas/canvas'
import Code from '../code/code'

import './container.css'

export default class Container extends React.Component{
    render(){
        return(
            <div className="container" id="Editor">
                <Canvas/>
                <Code/>
                <Tabs/>
            </div>
        )
    }
}