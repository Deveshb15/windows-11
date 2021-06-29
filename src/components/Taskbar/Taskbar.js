import React from 'react'
import './Taskbar.css'
import Clock from "./Clock/Clock";

import start from '../../assets/logo/start.png' 
import edge from '../../assets/logo/edge.png'
import file from '../../assets/logo/file.png'
import spotify from '../../assets/logo/spotify.png'
import vscode from '../../assets/logo/vscode.png'

const Taskbar = (props) => {
    return (
        <div className="taskbar">
            <div className="taskbar__logos">
                <img onClick={props.onToggleStart} src={start} alt="start" />
                <img src={edge} alt="edge" />
                <img src={spotify} alt="spotify" />
                <img onClick={props.onToggleFile} src={file} alt="file" />
                <img src={vscode} alt="vscode" />
            </div>
            <Clock />
        </div>
    )
}

export default Taskbar
