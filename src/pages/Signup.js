import Template from "../components/Template";
import signupImg from "../assets/signup.jpg"

const Signup = ({setIsLoggedIn}) => {
    return(
        <Template
        title="Join the millions to using SharePoint"
        desc1="Build skills for today, tomarrow and beyond"
        desc2="Education to future-proof your career"
        image={signupImg}
        formtpye="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Signup;