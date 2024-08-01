import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
// import UpdateTask from './updateTask';
import UpdateTaskList from './UpdateTaskModel';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {setSelectedTask,removeFromTask} from '../features/TaskSlice';

function TaskList() {

  const {taskListData} = useSelector((state)=>state.tasks);

  const disptach = useDispatch();

    const [modalShow, setModalShow] = React.useState(false);

    const DeleteTask = (task)=>{
        console.log("Delete Task");
        disptach(removeFromTask(task));
    }

    
    const updateTaskEdit = (task)=>{
        console.log("update Task");
        setModalShow(true);
        disptach(setSelectedTask(task));
    }
  return (
    <>
    <div>
      { Object.keys(taskListData).length !==0 &&
      
        <Table striped bordered hover>
            
      <thead>
        <tr>
          <th>#</th>
          <th>TaskName </th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          taskListData && taskListData.map((task,index)=>{
            return(
              <tr key =  {task.id}>
          <td>{index+1}</td>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td><Button variant="primary" type="submit" onClick={()=>updateTaskEdit(task)}>Update </Button> <Button variant="primary" type="submit" onClick={()=>DeleteTask(task)}>Delete </Button></td>
        </tr>
            )
          })
        }
        
       
      </tbody>
    </Table>

}

    <UpdateTaskList
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  
    </div>
    </>
  )
}

export default TaskList
