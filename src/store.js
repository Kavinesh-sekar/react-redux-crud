import {configureStore} from '@reduxjs/toolkit';
import taskreducer from './features/TaskSlice';

const store = configureStore({
    reducer:{
        tasks: taskreducer
    }
})

export default store;