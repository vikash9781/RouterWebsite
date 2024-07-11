import Template from "../components/Template"
import loginImg from "../assets/login.jpg"

const Login = ({setIsLoggedIn}) =>{
    return(
        <Template
        title="Welcome Back"
        desc1="Build skills for today, tomarrow and beyond"
        desc2="Education to future-proof your career"
        image={loginImg}
        formtpye="login"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Login;