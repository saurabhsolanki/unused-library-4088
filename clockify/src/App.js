

import { Route, Routes } from 'react-router-dom';
import './App.css';

import Features from './Component/Features';
import DownLoad from './Component/DownLoad';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Sidebar from './Dashboard/Sidebar';
import TimeTracker from './Dashboard/TimeTracker';
function App() {
  return (

    <div className="App"> 
      <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>}></Route>
        <Route path='/features' element={<Features/>} />
        <Route path='/download' element={<DownLoad/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/traker' element= {<Sidebar/>} />    
      </Routes>
      <TimeTracker/>
    </div>
  );
}

export default App;
