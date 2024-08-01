import React , {useEffect, useState}from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector,useDispatch } from 'react-redux';
// import {setSelectedTask} from '../features/TaskSlice';
// import {setSelectedTask} from '../features/TaskSlice';
import { updateTaskList } from '../features/TaskSlice';


function UpdateTask(props) {

  const {selectedTask} = useSelector((state)=>state.tasks);

  const disptach = useDispatch();

  console.log("setSelectedTask",selectedTask);
  
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [id,setid]= useState();


  const updateTaskEditing = (e)=>{
    props.onHide();
    disptach(updateTaskList({id,title,description}));
  }

useEffect(()=>{
  if(Object.keys(selectedTask).length !==0){
    setDescription(selectedTask.description);
    setTitle(selectedTask.title);
    setid(selectedTask.id);


  }
},[selectedTask])
  
  return (
    <div>
       <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form className="sm-3" >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Task Name</Form.Label>
      <Form.Control type="tname" placeholder="Enter email" value ={title} onChange={(e)=>setTitle(e.target.value)} />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Description</Form.Label>
      <Form.Control type="describ" placeholder="Password" value ={description} onChange={(e)=>setDescription(e.target.value)} />
    </Form.Group>
    
   
  </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="primary" type="submit" onClick={(e)=> updateTaskEditing(e)}>
      Submit
    </Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default UpdateTask
