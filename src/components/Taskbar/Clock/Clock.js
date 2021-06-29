import React, {useState, useEffect} from 'react'
import './Clock.css'

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
            <p>{timer.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}</p>
            <p>{`${timer.getMonth()+1}/${timer.getDate()}/${timer.getFullYear()}`}</p>
        </div>
    )
}

export default Clock