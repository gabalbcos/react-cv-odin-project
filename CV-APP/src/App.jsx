import { useState } from 'react'
import { PersonalInfo, EducationInfo } from './assets/components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Personal Info:</h1>
    <PersonalInfo />
    <h1>Education Info</h1>
    <EducationInfo />
    <h1>Experience</h1>
    </>
  )
}

export default App
