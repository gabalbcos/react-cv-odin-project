import {useState} from "react";

function PersonalInfo() {
    const [formData, setFormData] = useState({name:'', email:'', about:'', isEditing: true, buttonText: "save"});
  
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((previousFormData) => ({...previousFormData, [name]:value }));
    };
  
    const handleClick = () => {
        setFormData((previousFormData) => ({...previousFormData, isEditing: !formData.isEditing}));
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
    <input type="text" id="about" name="about" value={formData.about} onChange={handleChange}/></>)
:
    (<>
    <p>Name: {formData.name}</p>
    <p>E-mail: {formData.email}</p>
    <p>About: {formData.about}</p></>)}
    <input type='button' name="isEditing" id="isEditing" value={formData.buttonText} onClick={handleClick}/>
    </div>
    )
};

function EducationInfo() {
    const [formData, setFormData] = useState({schoolName:'', titleOfStudy:'', finishDate:'', isEditing: true, buttonText: "save"});
  
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((previousFormData) => ({...previousFormData, [name]:value }));
    };
  
    const handleClick = () => {
        setFormData((previousFormData) => ({...previousFormData, isEditing: !formData.isEditing}));
        (formData.isEditing ? (setFormData((previousFormData) => ({...previousFormData, buttonText: "edit"})))
        : (setFormData((previousFormData) => ({...previousFormData, buttonText: "save"}))))
    };


    return (
    
    <div>
    {formData.isEditing ? (<>
    <label htmlFor="schoolName">School Name:</label>
    <input type="text" id="schoolName" name="schoolName" value={formData.schoolName} onChange={handleChange}/>
    
    <label htmlFor="titleOfStudy">Title of Study:</label>
    <div>
    <select id="titleOfStudy" name="titleOfStudy" value={formData.titleOfStudy} onChange={handleChange}>
    <option name='bachelor'>Bachelor</option>
    <option name='technician'>Techinician</option>
    <option name='undergraduate'>Undergraduate</option>
    </select>
    </div>

    <label htmlFor="about">Finish Date:</label>
    <input type="date" id="finishDate" name="finishDate" value={formData.finishDate} onChange={handleChange}/></>)
:
    (<>
    <p>School Name: {formData.schoolName}</p>
    <p>E-mail: {formData.titleOfStudy}</p>
    <p>About: {formData.finishDate}</p></>)}
    <input type='button' name="isEditing" id="isEditing" value={formData.buttonText} onClick={handleClick}/>
    </div>
    )
};


export {PersonalInfo, EducationInfo}