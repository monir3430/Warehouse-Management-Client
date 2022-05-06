import React, { useEffect, useState } from 'react';
import {auth} from "../../firebase/firebase.init"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Signup.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [userInfo, setUserInfo] = useState({email: "", password: "", confirmPass: "",});
    const [error, setError] = useState({email: "", password: "", general: "",});

    const [createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    // email...................

    const signupEmail = (e)=>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value});
            setError({...error, email:""});
        }else{
            setError({...error, email:"Invalid Email"});
            setUserInfo({...userInfo, email: ""});
        }

    }
    // Password----------------------
    const signupPassword = (e)=>{
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if(validPassword){
            setUserInfo({...userInfo, password: e.target.value})
            setError({...error, password:""})
        } else{
            setError({...error, password:"At least 6 characters"});
            setUserInfo({...userInfo, password: ""});
        }
    }

    // Confirm Password-----------------
    const signupConfirmPassword = (e)=>{
        if(e.target.value === userInfo.password){
            setUserInfo({...userInfo, confirmPass: e.target.value});
            setError({...error, password:""});

        } else{
            setError({...error, password: "Password not Match"});
            setUserInfo({...userInfo, confirmPass: ""});
        }
    }


// Form Submit-----------------------

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    // Customized Hook Error-----------

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password.");
                    break;
                default:
                    toast("something went wrong or already exist");
            }
        }
    }, [hookError]);

    // Navigation----------------------
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || "/home"

    useEffect(()=>{
        if(user){
            navigate(from);
        }
    }, [user])

    return (
        <div className="signup-area" onSubmit={handleSubmit}>
        <div className="signup">Please Sign Up</div> <br />
        <form className="Signup-form" >
            <input type="email" placeholder="Enter Email" onChange={signupEmail} required/>
            <input type="password" placeholder=" Enter Password" onChange={signupPassword} required/> <br />
            <input type="password" placeholder=" Confirm Password" onChange={signupConfirmPassword} required/> <br />

            {error?.email && <p className="error">{error.email}</p>}
            {error?.password && <p className="error">{error.password}</p>}
            
            <button>Signup</button>
           

            <p>Have a account? <Link to = '/signin'><b>Sign-in</b></Link> </p>
            <ToastContainer />
        </form>

    </div>
    );
};

export default Signup;