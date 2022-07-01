import React from 'react';
import { useForm } from 'react-hook-form';


const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

    const url='http://localhost:5000/task';
    fetch(url,{
    method:'POST',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(data)


    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged){
            alert('Your Task is added')
        }
       
    })


    };





    return (
    

<div className='mt-12'>

<h4 className='text-xl text-primary text-center font-bold'>ADD YOUR TASK </h4>
 
<form onSubmit={handleSubmit(onSubmit)}  className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
<label></label>
<input  placeholder="J O B E T I T L E " class="input input-bordered w-full max-w-xs" type="text" {...register("jobtitle", { required: true, maxLength: 20 })}/>

<textarea class="textarea input input-bordered w-full max-w-xs"  type="text"  placeholder="Y O U C O M M E N T S  " {...register("description", { required: true, maxLength: 20 })}></textarea>   
<button className='btn w-full max-w-xs' type="submit">ADD TASK </button>
</form>

</div>
    );
};

export default AddTask;