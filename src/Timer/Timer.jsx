import React from 'react'
import "./Timer.css"

export default function Timer(props) {
  return (
    <div className='timer-box'>
      Time Remaining:  {props.currentTime}
    </div>
  )
}
