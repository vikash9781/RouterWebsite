import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {
const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email : "",
        password : ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name] : event.target.value
        }))
    }
   function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In")
    navigate("/dashboard")
   }

    return(
        <div>
         <form onSubmit={submitHandler}
         className="flex flex-col w-full gap-y-4 mt-6"
         >
         <label className="w-full text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem]">
            <p>
                Email Address<sup className="text-pink-950">*</sup>
            </p>


            <input
         required
         type="email"
         value={formData.email}
         onChange={changeHandler}
         placeholder="Enter the Email Id"
         name="email"
         className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]"
         />
         </label>

         <label>
            <p className="w-full text-[0.875rem] text-gray-400 mb-1 leading-[1.375rem]">
                Password<sup className="text-pink-950">*</sup>
            </p>


            <input
         required
         type={showPassword ? ("text") : ("password")}
         value={formData.password}
         onChange={changeHandler}
         placeholder="Enter the Password"
         name="password"
         className="bg-gray-800 rounded-[0.5rem] text-gray-300 w-full p-[12px]"
         />

        <span className="relative cursor-pointer bottom-[35px] left-[410px]"
        onClick={() => setShowPassword ((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF"/>) :
                            (<AiOutlineEye fontSize={20} fill="#AFB2BF"/>)}
        </span>

        <Link to="#">
        <p className="text-xs mt-1 text-blue-400 italic ml-auto max-w-max">Forget Password</p>
        </Link>

         </label>

         <button className="bg-yellow-400 rounded-[8px] font-medium text-gray-950 px-[12px] py-2  " >
           Sign In
         </button>
         </form>

        

         
        </div>
    )
}

export default LoginForm;