import React from 'react'
import AceEditor from "react-ace"
import './code.css'

import 'ace-builds'
import 'ace-builds/webpack-resolver'
// import 'brace/mode/javascript'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

export default class Code extends React.Component {
    constructor(){
        super()
        this.state = {
            height:"0",
            width:"0"
        }
    }

    componentDidMount = ()=>{
        this.fixWidth()
    }

    //fixing width of container
    fixWidth = ()=>{
        let heights = document.getElementById("EditorContainer").offsetHeight
        let widths = document.getElementById("EditorContainer").offsetWidth
        this.setState({
            height:heights,
            width: widths
        })
    }

    onChange = (val)=>{
        console.log(val)
    }

    render(){
        return(
            <div className="codeContainer" id="EditorContainer">
                <AceEditor
                    mode="javascript"
                    theme="dracula"
                    onChange={this.onChange}
                    name="editor"
                    editorProps={{ $blockScrolling: true }}
                    width={this.state.width}
                    height={this.state.height}
                />
            </div>
        )
    }
}