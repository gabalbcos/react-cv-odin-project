import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useState } from 'react';

export default function Create() {
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [finishDate, setFinishDate] = useState('');
    const postData = () => {
        console.log(companyName);
        console.log(jobTitle);
        console.log(startDate);
        console.log(finishDate);
    }
    return(
    <div>        
        <Form>
            <Form.Field>
                <label>Company Name</label>
                <input placeholder='Company Name' onChange={(e) => setCompanyName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Job Title</label>
                <input placeholder='Job Title' onChange={(e) => setJobTitle(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Start Date</label>
                <input type='date' onChange={(e) => setStartDate(e.target.value)}/>/
            </Form.Field>
            <Form.Field>
            <label>Finish Date</label>
                <input type='date' onChange={(e) => setFinishDate(e.target.value)}/>/
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    </div>
);}


