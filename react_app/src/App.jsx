import { useState } from 'react'

import './App.css'
import Nav from "./components/Nav"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Nav />
      <h1>Software Engineering</h1>
    </div>
  )
}

export default App
