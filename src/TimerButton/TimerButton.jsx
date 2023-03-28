import React from 'react'
import "./TimerButton.css";

export default function TimerButton(props) {

const pauseTimer = () =>{
  props.setTimeRun(false);
}

const restartTimer = () =>{
  props.setTimeRun(true);
}

const resetTimer = () =>{
  props.resetTimer();
}


if(props.timeRun){
  return (
    <div className='timer-reset-box'>
      <button className='stop-button' onClick={pauseTimer}>Stop Timer</button>
    </div>
  )

}
else{
return (
    <div className='timer-reset-box'>
      <button className="restart-button" onClick={restartTimer}>Restart Timer</button>
      <button className="restart-button" onClick={resetTimer}>Reset Timer</button>
    </div>
  )

}
 
}
