import React, { useState } from "react";
import { StopTimer } from '../../classes/stopTimer'

const Button = (props) => {
    const [times, setTimes] = useState([])

    const reset = () => {
        if (props.time > 0 && !props.timerOn) {
            props.setTime(0)
            setTimes([])
        }
    }

    const laps = () => {
        if (props.time > 0) {
            if (times.length > 0) {
                const newState = [...times]
                newState.push(new StopTimer(props.time, new Date()))
                newState[times.length - 1].setEndTime(new Date())
                setTimes(newState)
            } else {
                setTimes([...times, new StopTimer(props.time, new Date())])
            }

        } else if (props.time === 0) {
            setTimes([])
        }
    }

    return <>
        <div id="buttons">
            {!props.timerOn ? <button onClick={reset}>Reset</button> : <button className="btn-lap" onClick={laps}>Lap</button>}
            {!props.timerOn ? <button onClick={props.start}>Start</button> : props.replaces}
            <div className="lap-main">
                <div className="lap-container">
                    {times.map((item, idx) => {
                        return <div className="lap-content">
                            <div className="lap-idx">{`Lap${idx}`}</div>
                            <div>
                                <span>{item.getLapTime()}</span>|
                                <span>{item.getStartTime()}</span>|
                                <span>{item.getEndTime()}</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
}
export default Button