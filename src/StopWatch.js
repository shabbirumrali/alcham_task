import React, { useState } from 'react'
import './index.css'
import useTimer from 'react-timer-hook'

const Stopwatch = () => {
    const [reset, setReset] = useState('')
    const [value, setvalue] = useState(false)

    const resetValue = () => {
        setvalue(true)
    }    
    const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ onExpire: () => console.warn('onExpire called') });
    
  return (
    <div className='watch_container'>
        <div className="watch_working">
            <h2>Timmer</h2>
            <div className="watch_timmer">
                {value ? (
                    <span>0:0:0</span>
                ) : (
                    <span>{hours}:{minutes}:{seconds}</span>
                )}
                
            </div>

            <div className='watch_button_container'>
                <button onClick={start} >Start</button>
                <button onClick={pause} >Pause</button>                
                <button onClick={resetValue}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Stopwatch