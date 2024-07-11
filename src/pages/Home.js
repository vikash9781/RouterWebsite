import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Products from "../components/Product";

const Home = () => {

const API_URL = "https://fakestoreapi.com/products"
const [loading , setLoading] = useState(false)
const [posts, setPosts] = useState([])

async function fetchProductData() {
    setLoading(true);

    try{
        const res = await fetch(API_URL);
        const data = await res.json()
        setPosts(data);

    }
    catch(error){
        alert("An Error has Occured")
        setPosts([]);
    }
    setLoading(false)
}

useEffect(() => {
    fetchProductData();
}, [])

    return (
        <div className="flex flex-col justify-center items-center">
            {
                loading ? (<div className="flex flex-col justify-center items-center h-screen"><Spinner/></div>): 
                posts.length > 0 ? 
                (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  max-w-6xl p-2 mx-auto space-y-10 mt-0">
                  {  posts.map((post) => (
                        <Products key={post.id} post = {post}/>
                    ))}
                    </div>) :
                <div className="flex justify-center items-center ">
                    <p>
                        No Data Found
                    </p>
                </div>
            }
        </div>
    )
   
}

export default Home;