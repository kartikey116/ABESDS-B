import React from 'react'
import './card.css'

function card(props) {
  return (
    <div id='card'>card
        <img src="" alt=""  height={100} width={100}/>
        <h1>{props.name}</h1>
        <h1>{props.edu}</h1>
    </div>
  )
}

export default card