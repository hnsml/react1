import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './book.jsx'
import Group from './group.jsx'
import Recipe from './recipe.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Book /> 
     <br/>
     <br/>
     <Group /> 
     <br/>
     <br/>
     <Recipe />
    </>
  )
}

export default App
