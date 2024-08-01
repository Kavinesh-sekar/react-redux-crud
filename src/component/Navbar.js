import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
  const {taskListData} = useSelector((state)=>state.tasks);
  console.log("fddddddddd",taskListData);
  return (
    <div>
      <h1 className='text-center '>Project Management</h1>
      <h4 className='text-center lead'>Current pending Task {taskListData.length}</h4>
    </div>
  )
}

export default Navbar
