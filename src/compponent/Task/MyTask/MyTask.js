import React , { useEffect, useState } from 'react';
import Task from './Task';

const MyTask = () => {
    const [tasks,setTasks]=useState([]);
    
useEffect(()=>{

    fetch('http://localhost:5000/task')
    .then(res=>res.json()).then(data=>setTasks(data))
    
    
    },[])

    return (
       <div className='mt-16'>
            <h3  className='text-primary text-xl font-bold text-center'>TASK DETALS</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-12 justify-center'>
                {
                 tasks.map(task=> <Task task={task}></Task>)
                }
            </div>
        </div>
    );
};

export default MyTask;