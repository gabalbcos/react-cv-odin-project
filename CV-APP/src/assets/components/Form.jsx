import {useState} from "react";

function General() {
    const [formData, setFormData] = useState({name:'', email:'', about:''});
  
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((previousFormData) => ({...previousFormData, [name]:value }));
    };
  
    return (
    <div>
    
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
    <p>Your Name is: {formData.name}</p>

    <label htmlFor="email">E-mail:</label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
    <p>Your Name is: {formData.email}</p>

    <label htmlFor="about">About:</label>
    <input type="text" id="aboute" name="about" value={formData.about} onChange={handleChange}/>
    <p>Your Name is: {formData.about}</p>
    </div>
    )
}

export {General}