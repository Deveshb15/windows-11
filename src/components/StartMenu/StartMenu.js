import React from 'react'
import './StartMenu.css'
import startMenu from '../../assets/startmenu.png'

import fileExplorer from '../../assets/logo/file.png'
import spotify from '../../assets/logo/spotify.png'
import vscode from '../../assets/logo/vscode.png'
import edge from '../../assets/logo/edge.png'

const StartMenu = (props)  => {
    return (
        <div className="startButton">
            <div className={props.name}>
                <div className="header__start">
                    <p>Pinned</p>
                    <button>All apps {'>'}</button>
                </div>
                <div className="icons__start">
                    <div className="file__start">
                        <img src={fileExplorer} alt="" />
                        <p>File Explorer</p>
                    </div>
                    <div className="spotify__start">
                        <img src={spotify} alt="" />
                        <p>Spotify</p>
                    </div>
                    <div className="vscode__start">
                        <img src={vscode} alt="" />
                        <p>VSCode</p>
                    </div>
                    <div className="edge__start">
                        <img src={edge} alt="" />
                        <p>Microsoft Edge</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartMenu
