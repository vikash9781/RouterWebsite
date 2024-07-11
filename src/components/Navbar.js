import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import toast from 'react-hot-toast';
import image from "../images.png"
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;
    const {cart} = useSelector((state) => state)
 
 const navigate = useNavigate();
    function navigationHandler(){
        if(setIsLoggedIn(true)){
            navigate("/cart")
        }
       
        
    }
    
    return(
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
      <Link to="/home">
      <img src={image} alt='logo' width={160} height={32} loading='lazy'/>
      </Link>

      <ul className='text-white flex gap-x-6'>
        <li>
            <Link to="/home" className='border py-1 px-2 justify-center text-center'>Home</Link>
        </li>

        

        
      </ul>

      <div className='flex items-center gap-x-4'>
        {
            !isLoggedIn &&
            <Link to="login">
             <button className="bg-gray-800 text-white py-[8px] px-[12px] rounded border border-gray-900">Login</button>
            </Link>
        }
        
        { 
            !isLoggedIn &&
            <Link to="/signup">
             <button className='bg-gray-800 text-white py-[8px] px-[12px] rounded border border-gray-900'>Signup</button>
            </Link>
        }

        { 
            isLoggedIn &&
            <Link to="/home">
             <button onClick={() => {
                setIsLoggedIn(false)
                toast.success("Logged Out")
                
             }} className='bg-gray-800 text-white py-[8px] px-[12px] rounded border border-gray-900'>Logout</button>
            </Link>
        }

        { 
             isLoggedIn &&
            <Link to="/dashboard">
             <button className='bg-gray-800 text-white py-[8px] px-[12px] rounded border border-gray-900'>Dashboard</button>
            </Link>
        }

        {
            isLoggedIn &&
            <NavLink to="/cart">
            <div className="relative">
            <BsCart4  className="text-2xl text-white" onClick={navigationHandler}/>
            {
             cart.length > 0 &&
             <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
             justify-center items-center animate-bounce rounded-full text-white
             ">{cart.length}</span> 
            }
            
            </div>
        </NavLink>
        }

      </div>
        </div>
    )
}

export default Navbar;