import React from 'react'
import './StartMenu.css'
import startMenu from '../../assets/startmenu.png'

function StartMenu() {
    return (
        <div className="startmenu">
            <img className="imgStart" src={startMenu} alt="StartMenu" />
        </div>
    )
}

export default StartMenu
