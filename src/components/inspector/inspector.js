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
                            <li>
                                inspector1
                                <ul>
                                    <li>box1</li>
                                    <li>box1</li>
                                    <li>box1</li>
                                </ul>
                            </li>
                            <li>
                                inspector1
                                <ul>
                                    <li>box1</li>
                                    <li>box1</li>
                                    <li>box1</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}