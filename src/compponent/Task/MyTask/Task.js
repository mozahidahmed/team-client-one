import React from 'react';

const Task = ({task}) => {
    const {jobtitle,description}=task;
    return (
        <div className=''>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl p-12">
            
            <div className='flex'>
            <div>
         
            </div>
            <div className="">
                <p className='font-bold'>{jobtitle}</p>
                 {description}
            </div>
            </div>



        </div>
    </div>
    );
};

export default Task;