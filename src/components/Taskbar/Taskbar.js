import React from 'react'
import './Taskbar.css'
import taskbar from '../../assets/icons.PNG'

function Taskbar() {
    return (
        <div className="taskbar">
            <img src={taskbar} alt="taskbar"/>
        </div>
    )
}

export default Taskbar
