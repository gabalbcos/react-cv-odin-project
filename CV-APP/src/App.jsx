import { useState } from 'react'
import { PersonalInfo, EducationInfo } from './assets/components/Forms'
import './App.css'
import Create from './assets/components/Create'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Personal Info:</h1>
    <PersonalInfo />
    <h1>Education Info</h1>
    <EducationInfo />
    <h1>Experience</h1>
    <div><Create/></div>
    </>
  )
}

export default App
