import {useState} from "react";

function General() {
    const [formData, setFormData] = useState({name:'', email:'', about:'', isEditing: true, buttonText: "save"});
  
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((previousFormData) => ({...previousFormData, [name]:value }));
    };
  
    const handleClick = (e) => {
        setFormData((previousFormData) => ({...previousFormData, isEditing: !formData.isEditing}))
        (formData.isEditing ? (setFormData((previousFormData) => ({...previousFormData, buttonText: "edit"})))
        : (setFormData((previousFormData) => ({...previousFormData, buttonText: "save"}))))
    };


    return (
    
    <div>
    {formData.isEditing ? (<>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
    
    <label htmlFor="email">E-mail:</label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

    <label htmlFor="about">About:</label>
    <input type="text" id="aboute" name="about" value={formData.about} onChange={handleChange}/></>)
:
    (<>
    <p>Name: {formData.name}</p>
    <p>E-mail: {formData.email}</p>
    <p>About: {formData.about}</p></>)}
    <input type='button' name="isEditing" id="isEditing" value={formData.buttonText} onClick={handleClick}/>
    </div>
    )
}

export {General}