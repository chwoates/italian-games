import React from 'react'
import "./PuntoButton.css"

export default function PuntoButton(props) {

  const increment = () =>{
   props.incrementValue(15);
  } 

  return (
    <div>
      <button onClick={increment} className="punto-button">Punto!</button>
    </div>
  )
}
