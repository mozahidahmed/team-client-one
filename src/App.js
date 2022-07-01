
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './compponent/Shared/Navbar';
import AddTask from './compponent/Task/AddTask/AddTask';
import Calender from './compponent/Task/Calender/Calender';
import MyTask from './compponent/Task/MyTask/MyTask';



function App() {
  return (
    <div >
     
      <Navbar></Navbar>
    <Routes>

<Route path="" element={<AddTask></AddTask>}></Route>
<Route path="addtask" element={<AddTask></AddTask>}></Route>
<Route path="calender" element={<Calender></Calender>}></Route>
<Route path="mytask" element={<MyTask></MyTask>}></Route>






    </Routes>
    </div>
  );
}

export default App;
