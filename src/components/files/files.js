import React from 'react'
import './files.css'
import PerfectScrollbar from 'perfect-scrollbar';
import Element from './elements/element'

import axios from 'axios'

export default class Files extends React.Component {
    componentDidMount=()=>{
        const ps = new PerfectScrollbar('#files',{
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
    }

    addFile = ()=>{
        axios({
            method: 'post',
            url: 'http://localhost:3300/test',
            // responseType: 'stream'
          })
            .then(function (response) {
              console.log(response)
            });
    }

    render () {
        return (
            <div className = 'fileContainer'>
                <div className="tab">File</div>
                <div className="container">
                    <div className="search">
                        <div className="add" onClick = {()=>this.addFile()}>
                            <i className="fas fa-plus"></i>
                        </div>
                        <div className="searchBar">
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="files" id="files">
                        <ul>
                            <li>
                                <Element>file1</Element>
                                <ul>
                                    <li><Element>box1</Element></li>
                                    <li><Element>box1</Element></li>
                                    <li><Element>box1</Element></li>
                                </ul>
                            </li>
                            <li>
                                <Element>file1</Element>
                                <ul>
                                    <li><Element>box1</Element></li>
                                    <li><Element>box1</Element></li>
                                    <li><Element>box1</Element></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}