import React from 'react'
import './FileExplorer.css'
import fileexplorer from '../../assets/fileexplorer.png'

const FileExplorer = (props)  => {
    return (
        <div className={props.name}>
            <img className="imgFile" src={fileexplorer} alt="StartMenu" />
        </div>
    )
}

export default FileExplorer
