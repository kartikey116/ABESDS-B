import React from 'react'
import './Fashion.css'

function Fashion(props) {
  return (
    <div id="card">
        <img src={props.image} alt="" height={100} width={100} />
        <h1>Title{props.title}</h1>
        <h4>Price{props.price}</h4>
    </div>
  )
}

export default Fashion