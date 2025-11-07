import React from 'react'
import './book.css'
function Book(props) {
  return (
    <div id='book'>
    <img  src={props.img} alt="" height={200} width={150} />
      <h1 >Title:{props.title}</h1>
      <h1 >Price:{props.price}</h1>
      <div></div>
    </div>
  )
}

export default Book
