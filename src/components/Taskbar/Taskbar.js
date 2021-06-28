import React from 'react'
import './Taskbar.css'
import taskbar from '../../assets/icons.PNG'

const Taskbar = (props) => {
    return (
        <div className="taskbar">
            <img onClick={props.onToggle} src={taskbar} alt="taskbar"/>
        </div>
    )
}

export default Taskbar
