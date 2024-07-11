// import image from "../images.png"
// import flagImage from "../flag.jpg"
// import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import iconImg from "../razorpay.jpg"


function Razorpay(props){
  const isLoggedIn = props.isLoggedIn
    return(
        <div>
      
       <section>

       <div className='bg-deepBlue flex justify-center items-center w-screen gap-40'>
        <div className='flex flex-col justify-center items-start space-y-5'>
          
          <div>
          <h1 className='text-white text-3xl font-bold font-mullish'>Power your finance,</h1>
          <h1 className='text-white text-3xl font-bold font-mullish'>grow your business</h1>
          </div>
        
        <div className='bg-lightBlue h-1 w-6'></div>

        <div>
        <p className='text-gray-300 text-sm '>Accept Payments from customers.Automate</p>
         <p className='text-gray-300  text-sm'>payouts to vendors & employees.Never run out</p> 
         <p className='text-gray-300 text-sm'> of working capital</p>
        </div>
        
       
  
       
        

        </div>
        
        <div className='max-w-xl max-h-xl'>
        <img src={iconImg} alt='razorpay icon '/>
        </div>

        
       </div>

       

       </section>


    </div>
    )
}

export default Razorpay;