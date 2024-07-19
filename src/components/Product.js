import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast"
import { remove , add} from "../redux/slices/CartSlice";
import { useEffect } from "react";


function Products({post}) {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log("product data printed")
    },[])

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item add to cart")   
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from cart")
    }
    return(
        <div className="flex flex-col justify-center items-center 
        hover:scale-110 transition duration-300 ease-in gap-0 p-4 mt-10 ml-5 rounded-xl  
        shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-white  ">
            <div >
                <p className="text-gray-800 font-semibold text-lg text-left truncate w-40 mt-1">{post.title.split(" ").slice(0,3).join(" ") + "..."}</p>
            </div>

            <div className="h-[80px]">
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left gap-0 gap-y-0">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>

            <div className="h-[180px]">
                <img src={post.image} className="h-full w-full"/>
            </div>


                
            <div className="flex justify-between gap-12 items-center w-full mt-5">
              <div>
                <p className="text-green-600 font-semibold text-lg">${post.price}</p>
              </div>


              {
                cart.some((p) => p.id == post.id) ?
                (
                    <button
                    className="text-gray-800 border-2 border-gray-800 rounded-full font-semibold
                    text-[12px] p-1 px-3 uppercase
                    hover:bg-gray-800
                    hover:text-white transition duration-300 ease-in"
                    onClick={removeFromCart}>
                        Remove Item
                    </button>
                ) : 
                (
                    <button 
                    className="text-gray-800 border-2 border-gray-800 rounded-full font-semibold
                    text-[12px] p-1 px-3 uppercase
                    hover:bg-gray-800
                    hover:text-white transition duration-300 ease-in"
                    
                    onClick={addToCart}>
                        Add to Cart
                    </button>
                )
              }
            </div>
            


        </div>
    )
}
 
export default Products;