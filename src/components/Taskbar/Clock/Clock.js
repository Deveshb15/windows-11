import React, {useState, useEffect} from 'react'
import './Clock.css'

import battery from '../../../assets/battery.png'

const Clock = (props) => {

    const [timer, setTimer] = useState(new Date())

    useEffect(() => {
        let timerID = setInterval(() => {
            tick();
        }, 1000)
        return () => {
            clearInterval(timerID)
        }
    })

    function tick(){
        setTimer(new Date())
    }

    return (
        <div className="dateRight">
            <div className="batteryDisplay">
                <img src={battery} alt="battery" />
            </div>
            <div className="timeDisplay">
                <p>{timer.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}</p>
                <p>{`${timer.getMonth()+1}/${timer.getDate()}/${timer.getFullYear()}`}</p>
            </div>
        </div>
    )
}

export default Clock