import React from 'react'
import './Date.css'
import date from '../../../assets/taskbarright.PNG'

const Date = () => {
    return (
        <div className="dateRight">
            <img className="date" src={date} alt="date" />
        </div>
    )
}

export default Date
