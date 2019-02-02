import React, { Component } from 'react'
import './Toggle.css'
export default class Toggle extends Component {
    state = { on: false }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        //style={{ marginTop: 10 + 'px' }}
        return (
            <div className="container-fluid">
                <button onClick={this.toggle}>Show/Hide</button>
                <div >
                    <div className="table-row header space-me">
                        <div className="text">Job Name</div>
                        <div className="text">Description</div>
                        <div className="text">Provider Name</div>
                        <div className="text">Region</div>
                        <div className="num">Status</div>
                    </div>
                    <div className="table-row">
                        <div className="text">OBS Name</div>
                        <div className="text">OBS Description</div>
                        <div className="text">hpcloud</div>
                        <div className="text">nova</div>
                        <div className="num">created</div>
                    </div>
                </div>
                {this.state.on &&
                    <div className="container-fluid">
                        <div className="table-row header space-me" >
                            <div className="text">Job Name</div>
                            <div className="text">Description</div>
                            <div className="text">Provider Name</div>
                            <div className="text">Region</div>
                            <div className="num">Status</div>
                        </div>
                        <div className="table-row">
                            <div className="text">OBS Name</div>
                            <div className="text">OBS Description</div>
                            <div className="text">hpcloud</div>
                            <div className="text">nova</div>
                            <div className="num">created</div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}


