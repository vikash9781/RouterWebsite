import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {  useNavigate } from "react-router-dom";



const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
       const [ formData, setFormData] = useState(
        {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            confirmPassword : ""
        }
       );


       function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name] : event.target.value
        }))

        
    }  
    const [ showPassword , setShowPassword] = useState(false); 
    const [ accountType , setAccoutTpye] = useState("Customer");
    const [ showConfirmPassword , setShowConfirmPassword] = useState(false); 


   function submitHandler(event){

    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
        toast.error("Password does not match");
    }else{
        setIsLoggedIn(false);
        toast.success("Account Created")
        const formKaData = {
           ...formData
        }
        console.log(formKaData)
        const finalData = {
            formKaData , accountType
        }
      
        navigate("/login")
        console.log(finalData)
    }
    }
    
    

    useEffect(() => {
        const emaildata = [formData.email , formData.password]
    
    localStorage.setItem('formData' , JSON.stringify(emaildata  
    )
    )
    console.log(emaildata)
    
    }, [formData])

    
   

    return(
        <div >
          <div className="flex bg-gray-900 p-1 gap-x-1 my-6 rounded-full max-w-max" >
            <button className={`${accountType ==="Customer" ?
              "bg-black text-gray-300"
            : "bg-transparent text-gray-500"} py-2 px-5 rounded-full transition-all duration-200"
             `}
             onClick={() => setAccoutTpye("Customer")}>
                Customer
            </button>

            <button className={`${accountType ==="Seller" ?
              "bg-black text-gray-300"
            : "bg-transparent text-gray-500"} py-2 px-5 rounded-full transition-all duration-200"
             `} onClick={() => setAccoutTpye("Seller")}>
                Seller
            </button>

          </div>

        <form onSubmit={submitHandler}>
              <div className="flex gap-3 mt-3">
                 <label className="w-full text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem]">
                <p>
                    First Name <sup  className="text-pink-950">*</sup>
                </p>
                <input
                required
                type="text"
                name = "firstName"
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={formData.firstName}
                className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]"
                />
                 </label>

                 <label className="w-full text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem]">
                <p>
                    Last Name <sup  className="text-pink-950">*</sup>
                </p>
                <input
                required
                type="text"
                name = "lastName"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                value={formData.lastName}
                className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]"
                />
                 </label>
              </div>

              <label className="w-full text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem] mt-4">
                <p>
                    Email Address <sup  className="text-pink-950">*</sup>
                </p>
                <input
                required
                type="email"
                name = "email"
                onChange={changeHandler}
                placeholder="Enter Email Address"
                value={formData.email}
                className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]"
                />
                 </label>
         
         <div className="flex gap-3">
            
         
               <label className="w-full text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem] mt-3">
                <p>
                    Create Password <sup  className="text-pink-950">*</sup>
                </p>
                <input
                required
                type={showPassword ? ("text") : ("password")}
                name = "password"
                onChange={changeHandler}
                placeholder="Enter Password"
                value={formData.password}
                className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]"
                />
                   <span className="relative cursor-pointer bottom-[30px] left-[190px]"
                    onClick={() => setShowPassword ((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />) :
                         (<AiOutlineEye fontSize={20} fill="#AFB2BF" />)}
                   </span>
                 </label>
        

                 <label className="w-full text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem] mt-3">
                <p>
                    Confirm Password <sup  className="text-pink-950">*</sup>
                </p>
                <input
                required
                type={showConfirmPassword ? ("text") : ("password")}S
                name = "confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]"
                />
                   <span className="relative cursor-pointer bottom-[30px] left-[190px]" 
                   onClick={() => setShowConfirmPassword ((prevp) => !prevp)}>
                        {showConfirmPassword  ? (<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />) :
                                          (<AiOutlineEye fontSize={20} fill="#AFB2BF"/>)}
                   </span>
                 </label>

         </div>
           <button className="bg-yellow-400 rounded-[8px] font-medium text-gray-950 px-[12px] w-full py-2 ">
            Create Account
           </button>
              
        </form>

        </div>
    )
}

export default SignupForm;