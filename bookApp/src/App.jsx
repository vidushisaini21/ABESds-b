import React from 'react'
import Book from './components/Book'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
  
    <div id='rt'>
      <Navbar />
    <div id='container'>
     <Book title="Hindi" price="250" img = "https://rachnasagar.in/assets/images/product/big/1108Forever-Hindi-1_F.jpg"/>
      <Book title="python" price="250"/>
       <Book title="English" price="250"/>
       <Book title="Chemistry" price="250"/>
    </div>
    </div> 
    
    
  )
}

export default App
