import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import link from "react-router-dom";

const Home = () => {
    const [jobExpData, setJobExp] = useState({
        companyName: '',
        positionName: '',
        startDate: '',
        endDate:''
      });
    const valueInput = (e) => setJobExp({...jobExpData, [e.target.name]: e.target.value});
    
    const addJobExp = (e) => {
      e.preventDefault();
      console.log('Mandou para a API');
      console.log("Info: " + jobExpData.companyName)
    };
    
    useEffect(() => {
      try {
        const getAllData = async () => {
          const res = await axios.get("http://localhost:8000/jobExperience")
        };
        getAllData();

       } catch(error) {
          console.log(error)
        }
    }, [];)
  return (
    <div>
       <h1>CRUD - Job Experience Form</h1>
       <h2>Job Experience</h2>
       <form onSubmit={addJobExp}>
        <label>Company Name:</label>
        <input type='text' name='companyName' placeholder='Type company name' onChange={valueInput} value={jobExpData.companyName}/><br/><br/>
        <label>Position Name:</label>
        <input type='text' name='positionName' placeholder='Type the name of your position' onChange={valueInput} value={jobExpData.positionName}/><br/><br/>
        <label>Start Date:</label>
        <input type='date' name='startDate' onChange={valueInput} value={jobExpData.startDate}/><br/><br/>
        <label>End Date:</label>
        <input type='date' name='endDate' onChange={valueInput} value={jobExpData.endDate}/><br/><br/>
        <button type='submit'>Submit</button>
       </form>  
    </div>
  )
}

export default Home
