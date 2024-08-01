import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {addtasktoList} from '../features/TaskSlice';

function AddTask() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

   

    const disptach = useDispatch();

    const AddTask =(e)=>{
        e.preventDefault()
        console.log({title,description});
        disptach(addtasktoList({title,description}));
        setDescription('');
        setTitle('');

    }
  return (
    <section className='my-5'>
    <Form className="sm-3" >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Task Name</Form.Label>
      <Form.Control type="tname" placeholder="Enter Task" value ={title} onChange={(e)=>setTitle(e.target.value)} />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Description</Form.Label>
      <Form.Control type="describ" placeholder="Enter description" value ={description} onChange={(e)=>setDescription(e.target.value)} />
    </Form.Group>
    
    <Button variant="primary" type="submit" onClick={(e)=> AddTask(e)}>
      Submit
    </Button>

{/* <Button variant="primary" type="submit" onClick={(e)=> disptach(addtasktoList)}>
      Submit
    </Button> */}
  </Form>
  </section>
  )
}

export default AddTask
