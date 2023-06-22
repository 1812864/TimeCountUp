/* eslint-disable no-mixed-operators */
import React, { useState,useRef,useEffect } from "react";
import './App.css'
import Header from "./component/clock/clock";
import Button from "./component/buttons/buttons";
const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [thems, setThems] = useState(false)
  const [clock, setClock] = useState(false)

  let interval = useRef(null)
  useEffect(() => {
    if (timerOn) {
      interval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } 
    return () => clearInterval(interval.current);
  });

  const stop = () => {
    if (timerOn) {
      setTimerOn(false)
    } else if (!timerOn && time > 0) {
      start(true)
    }
  }

  const start = () => {
    if (!timerOn && time === 0 || time > 0) {
      setTimerOn(true)
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
    if (!clock) {
      setClock(true)
    }
    else {
      setClock(false)
    }
  }

  let replaces = <button onClick={stop}>Stop</button>
  const theme = 'dark'

  return (
    <div className={`Timers ${!!thems ? theme : ''}`}>
      <Header time={time} themeMode={themeMode} thems={thems} clock={clock}/>
      {clock?<button onClick={clockOrTimer}>Clock</button>:<button onClick={clockOrTimer}>Time</button>}
      <Button time={time} setTime={setTime} start={start} replaces={replaces} timerOn={timerOn} />
    </div>
  );
};

export default App;