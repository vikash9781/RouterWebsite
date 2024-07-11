import Razorpay from "../components/Razorpay";

const Homes = (setIsLoggedIn,isLoggedIn) => {
    return(
        <div className="flex justify-center items-center text-white text-3xl h-screen w-full">
         <Razorpay setIsLoggedIn = {setIsLoggedIn} isLoggedIn = {isLoggedIn}/>
        </div>
    )
}

export default Homes;