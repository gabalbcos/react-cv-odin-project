import { useState } from 'react'
import { General } from './assets/components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <General />
    </>
  )
}

export default App
