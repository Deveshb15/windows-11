import React from 'react'
import './StartMenu.css'
import startMenu from '../../assets/startmenu.png'

const StartMenu = (props)  => {
    return (
        <div className="startButton">
            <div className={props.name}></div>
        </div>
    )
}

export default StartMenu
