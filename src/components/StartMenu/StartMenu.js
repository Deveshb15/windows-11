import React from 'react'
import './StartMenu.css'
import startMenu from '../../assets/startmenu.png'

const StartMenu = (props)  => {
    return (
        <div className={props.name}>
            <img className="imgStart" src={startMenu} alt="StartMenu" />
        </div>
    )
}

export default StartMenu
