import React from 'react'
import './element.css'

export default class element extends React.Component {
    // constructor(){
    //     super()
    // }

    render(){
        return(
            <div className="element">
                {this.props.children}
            </div>
        )
    }
}