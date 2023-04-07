import React from 'react';
import Navbar from './components/Navbar';
import './styles/main.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddNewTask from './components/AddNewTask';
import Home from './pages/Home';
import EditTask from './components/EditTask';

function App() {
  return (
    <Router> 
       <Navbar/>
       <Routes>
         <Route path='/' Component={Home}/>
         <Route path='/addNewTask' Component={AddNewTask}/>
         <Route path='/editTask/:id' Component={EditTask}/>
       </Routes>
    </Router>
  );
}

export default App;
