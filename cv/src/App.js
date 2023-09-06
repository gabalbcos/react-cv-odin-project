
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>CRUD - Job Experience Form</h1>
     <h2>Job Experience</h2>
     <form>
      <label>Company Name:</label>
      <input type='text' name='companyName' placeholder='Type company name'/><br/><br/>
      <label>Position Name:</label>
      <input type='text' name='positionName' placeholder='Type the name of your position'/><br/><br/>
      <label>Start Date:</label>
      <input type='date' name='startDate'/><br/><br/>
      <label>End Date:</label>
      <input type='date' name='endDate'/><br/><br/>
     </form>
    </div>
  );
}

export default App;
