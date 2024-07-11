import { Navigate } from "react-router-dom";

function PrivateRoute2({isLoggedIn,children}){
    if(isLoggedIn){
        return(children)
    }else{
        return <Navigate to="/login" />
    }
}
export default PrivateRoute2;