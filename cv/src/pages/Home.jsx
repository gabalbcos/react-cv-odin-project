import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [jobExpData, setJobExp] = useState([]);
    const [jobInput, setInput] = useState({
      companyName: "",
      jobTitle: "",
      startDate: "",
      endDate: ""
    });
    const [render, setRender] = useState(false);
    
    useEffect(() => {
      try {
        const getAllData = async () => {
          const res = await axios.get("http://localhost:8000/jobExperience");
          setJobExp(res.data);
        };
        getAllData();

       } catch(error) {
          console.log(error)
        }
    }, [render]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8000/jobExperience", jobInput)
      setRender(true);
    }

    const handleDelete = async (id) => {
      await axios.delete(`http://localhost:8000/jobExperience/${id}`);

      const newJobExp = jobExpData.filter((exp) => {
        return exp.id !== id;
      }) ;
      setJobExp(newJobExp);
    } 

  return (
    <div>
       <h1>CRUD - Job Experience Form</h1>
       <h2>Job Experience</h2>
       <div className="mb-3">
         <form onSubmit={handleSubmit}>
          <label className='form-label'for='companyNameField'>Company Name:</label>
          <input className='form-control' id='companyNameField' type='text' name='companyName' placeholder='Type company name' onChange={(e) => setInput({...jobInput, [e.target.name]: e.target.value})} value={jobInput.name}/><br/><br/>
          <label className='form-label'for='positionName'>Position Name:</label>
          <input className='form-control' id='positionName' type='text' name='positionName' placeholder='Type the name of your position' onChange={(e) => setInput({...jobInput, [e.target.name]: e.target.value})} value={jobInput.name}/><br/><br/>
          <label className='form-label'for='startDate'>Start Date:</label>
          <input className='form-control' id='startDate' type='date' name='startDate' onChange={(e) => setInput({...jobInput, [e.target.name]: e.target.value})} value={jobInput.name}/><br/><br/>
          <label className='form-label'for='endDate'>End Date:</label>
          <input className='form-control' id='startDate' type='date' name='endDate'onChange={(e) => setInput({...jobInput, [e.target.name]: e.target.value})} value={jobInput.name}/><br/><br/>
          <button type='submit'>Submit</button>
          </form>
       </div>

       {
        jobExpData && jobExpData.map((job) => {
          return(
            <tr>
              <td>Company:{job.companyName}</td>
              <td>Name: {job.positionName}</td>
              <td>Start:{job.startDate}</td>
              <td>End:{job.endDate}</td>
              <td>
                <button onClick={() => handleDelete(job.id)}>Delete</button>                
              </td>
            </tr>
          )
        })
       }
    </div>
  )
}

export default Home
