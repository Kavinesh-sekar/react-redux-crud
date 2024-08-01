// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    taskListData : [],
    selectedTask : {}
}

const TaskSlice = createSlice({
    name: 'taskSlice',
    initialState ,
    reducers :{
        addtasktoList :(state,action) =>{
            const id = Math.random()*100;
            // console.log("stautssssss",state);
            let task = {...action.payload ,id};
            state.taskListData.push(task);
        },
        removeFromTask :(state,action)=>{
            state.taskListData= state.taskListData.filter((task)=>task.id !== action.payload.id)
        },
        updateTaskList:(state,action)=>{
            state.taskListData = state.taskListData.map((task)=>task.id === action.payload.id ? action.payload:task)
        },
        setSelectedTask:(state,action)=>{
            state.selectedTask = action.payload;
        }
    }
})

export const {addtasktoList,setSelectedTask,updateTaskList,removeFromTask} = TaskSlice.actions;
export default TaskSlice.reducer;