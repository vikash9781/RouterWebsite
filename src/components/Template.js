import React from "react";
import frameImage from '../assets/frame.jpg'
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"

function Template({title, desc1, desc2, image, formtpye, setIsLoggedIn}) {
    
    return(
        <div className="flex justify-between w-11/12  max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
               <div className="w-11/12 max-w-[450px]">
                   <h1 className="text-gray-300 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>

                   <p className="text-[1.125rem] leading-[1.625] mt-4">
                    <span className="text-gray-400">
                        {desc1}
                    </span>
                <br/>
                    <span className="text-blue-400 italic">
                        {desc2}
                    </span>
                   </p>

                   {formtpye === "signup" ? 
                   (<SignupForm setIsLoggedIn = {setIsLoggedIn}/>):
                   (<LoginForm setIsLoggedIn = {setIsLoggedIn}/>)}
                 

                 <div className="flex w-full items-center my-4 gap-x-2 mt-4">
                   <div className="w-full h-[1px] bg-gray-800"></div>
                   <p className="text-gray-800 font-medium leading-[1.375rem]" > OR </p>
                   <div className=" w-full h-[1px] bg-gray-800"></div>
                 </div>
                   
                <button className="w-full flex justify-center items-center rounded-[8px] font font-medium
                      text-gray-400 border border-gray-800 px-[12px] py-[8px] gap-x-2 mt-6">
                <FcGoogle/>
                    <p>
                        sign up with Google
                    </p>
                </button>

               </div>
        
           <div className="relative w-11/12 max-w-[450px]">
            <img src={frameImage} 
            alt="frame" 
            width={558} 
            height={504} 
            loading="lazy" className="absolute top-7 left-2"/>

            <img src={image} 
            alt="imagef" 
            width={558} 
            height={490} 
            loading="lazy" className="absolute top-4 right-4 max-w-[450px]:"/>
           </div>

        </div>
    )
}

export default Template;