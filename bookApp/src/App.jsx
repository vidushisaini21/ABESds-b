import React from 'react'
import Book from './components/Book'
import './App.css'

function App() {
  return (
    <div id='container'>
     <Book title="math" price="250"/>
      <Book title="python" price="250"/>
       <Book title="science" price="250"/>
    </div>
  )
}

export default App
