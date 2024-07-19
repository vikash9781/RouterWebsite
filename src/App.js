
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Homes from './pages/Homes';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import Cart from './pages/Cart';
import PrivateRoute2 from './components/PrivateRoute2'

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="h-fit bg-deepBlue flex flex-col ">
     
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
  <Routes>
        <Route path='/' element = {<Homes setIsLoggedIn = {setIsLoggedIn} isLoggedIn = {isLoggedIn}/>}/>
        <Route path='/login' element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
        <Route path='/signup' element = {<Signup setIsLoggedIn = {setIsLoggedIn}/>}/>
        
        <Route path='/dashboard' element = {
          <PrivateRoute isLoggedIn = {isLoggedIn}>
            <Dashboard/>      
          </PrivateRoute>
          }/>

         <Route path='/cart' element = {
          <PrivateRoute2 isLoggedIn={isLoggedIn}>
            <Cart/>
          </PrivateRoute2>
         }/>

      </Routes> 
   
  

    </div>
  );
}

export default App;
