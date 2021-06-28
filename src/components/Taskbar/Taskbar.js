import React from 'react'
import './Taskbar.css'
import taskbar from '../../assets/icons.PNG'
import Date from "./Date/Date";

const Taskbar = (props) => {
    return (
        <div className="taskbar">
            <img onClick={props.onToggle} src={taskbar} alt="taskbar"/>
            <Date />
        </div>
    )
}

export default Taskbar
