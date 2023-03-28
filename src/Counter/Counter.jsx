import React from 'react'
import "./Counter.css"

export default function Counter(props) {
  return (
    <div className="counter-box">
     Points:  {props.numPoints}
    </div>
  )
}
