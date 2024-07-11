import toast from "react-hot-toast";
import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";


function CartItem({post , postIndex}){

    const dispatch = useDispatch();
    
    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed")
    }


    return(
        <div className="border-b-2 border-gray-800 flex mt-4 w-full justify-start items-start mr-[440px] mb-4 ">
        
           <div className=" flex w-full justify-between gap-10">

           <div className="h-[240px] w-[300px] mb-4 ">
                <img src={post.image} className="h-full w-full"  />
             </div>
             <div className="" >

                 <h1 className="font-semibold text-xl mt-6 text-white">
                    {post.title}
                 </h1>

                  <h1 className="mt-5 text-white ">
                    {post.description.split(" ").slice(0,14).join(" ") + "..."}
                  </h1>


                  <div className="flex justify-between items-center mt-8">

                    <p className="text-green-600 font-semibold">${post.price}</p>                 

                  <div onClick={removeFromCart} className=" border rounded-full bg-red-500 p-1 mr-7">
                  <MdDelete className="text-red-900" />              
                  </div>

                  </div>
           </div>


           </div>
             
            


        </div>
    )
}

export default CartItem;