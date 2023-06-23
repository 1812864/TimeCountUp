/* eslint-disable no-mixed-operators */
import React, { useState, useRef, useEffect } from "react";
import HandleClock from "./component/clock/handleClock";
import Button from "./component/handleButton/buttons";
import TableDisplayTime from "./component/tableTime/tableDisplayTime";
import { StopTimer } from "./classes/stopTimer";

import './App.css'

const App = () => {
  const [time, setTime] = useState(0);
  const [runTimeOn, setRunTimeOn] = useState(false);
  const [thems, setThems] = useState(false)
  const [displayClock, setDisplayClock] = useState(false)
  const [getTimes, setGetTimes] = useState([])

  let interval = useRef(null)
  useEffect(() => {
    if (runTimeOn) {
      interval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval.current);
  }, [runTimeOn]);

  const handleBtnReset = () => {
    setTime(0)
    setGetTimes([])
  }

  const handleBtnLaps = () => {
    if (time > 0) {
      if (getTimes.length > 0) {
        const newState = [...getTimes]
        newState.push(new StopTimer(time, new Date()))
        newState[getTimes.length - 1].setEndTime(new Date())
        setGetTimes(newState)
      } else {
        setGetTimes([...getTimes, new StopTimer(time, new Date())])
      }

    } else if (time === 0) {
      setGetTimes([])
    }
  }

  const handleBtnStop = () => {
    if (runTimeOn) {
      setRunTimeOn(false)
    } else if (!runTimeOn && time > 0) {
      handleBtnStart(true)
    }
  }

  const handleBtnStart = () => {
    if (!runTimeOn && time === 0 || time > 0) {
      setRunTimeOn(true)
    }
  }

  const themeMode = () => {
    if (!thems) {
      setThems(true)
    }
    else {
      setThems(false)
    }
  }

  const clockOrTimer = () => {
    if (!displayClock) {
      setDisplayClock(true)
    }
    else {
      setDisplayClock(false)
    }
  }

  const theme = 'dark'

  return (
    <div className={`Timers ${!!thems ? theme : ''}`}>
      <HandleClock time={time} themeMode={themeMode} thems={thems} clock={displayClock} />
      {!!thems ? <Button onClick={themeMode} lable='Dark' /> : <Button onClick={themeMode} lable='Light' />}
      {!!displayClock ? <Button onClick={clockOrTimer} lable='Clock' /> : <Button onClick={clockOrTimer} lable='Time' />}
      <div id="buttons">
        {!!runTimeOn ? <Button lable='Reset' onClick={handleBtnReset} /> : <Button className='btn-lap' lable='Lap' onClick={handleBtnLaps} />}
        {!!runTimeOn ? <Button lable='Start' onClick={handleBtnStart} /> : <Button lable='Stop' onClick={handleBtnStop} />}
        <TableDisplayTime times={getTimes} />
      </div>
    </div>
  );
};

export default App;