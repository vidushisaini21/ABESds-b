import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div id='card'>
      <img src="https://img.freepik.com/free-vector/boy-happy-childhood-icon-isolated_24640-134167.jpg?semt=ais_hybrid&w=740&q=80" alt="" height={100} width={100}/>
      <h1>{props.name}</h1>
      <h1>{props.edu}</h1>
      <h1>ABES</h1>
      
    </div>
  )
}

export default Card
