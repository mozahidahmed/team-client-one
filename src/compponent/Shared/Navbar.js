import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
 
    
       
  
 
        const menuitems=
        <>
        <li className='text-black font-bold text-1xl'><Link to="/addtask">ADD TASK </Link></li>
          <li className='text-black font-bold text-1xl'><Link to="/mytask">MY  TASK </Link></li>
          <li className='text-black font-bold text-1xl'><Link to="/calender">CALENDER</Link></li>
        
      
        </>
      
    return (
       <div className='px-16 bg-primary mt-6'>
         <div className="navbar ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
           
           {menuitems}
  
            
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl font-bold">GOOGLE TASK</a>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuitems}
          </ul>
        </div>
       <div>
       
       </div>
       

      </div>
       </div>


    );
};

export default Navbar;