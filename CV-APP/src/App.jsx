import { useState } from 'react'
import { PersonalInfo, EducationInfo } from './assets/components/Forms'
import './App.css'
import Create from './assets/components/Create'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Personal Info:</h1>
    <PersonalInfo />
    <h1>Education Info</h1>
    <EducationInfo />
    <h1>Experience</h1>
    <Router>
      <div>
      <Route exact path='/create' component={Create} />
        </div>
    </Router>
    </>
  )
}

export default App
