import React, { useState } from 'react';
import {auth} from "../../firebase/firebase.init"
import { toast, ToastContainer } from 'react-toastify';
import "./Signin.css"
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = (e)=>{
        const emailRegularExpression = /\S+@\S+\.\S+/;
        const validEmailTest= emailRegularExpression.test(e.target.value);
        if(validEmailTest){
            setEmail(e.target.value);
            setError("");
        }
        else{
            setError('Invalid Email');
            setEmail("");
        }
    }

    const handlePasswordChange = (e)=>{
        const passwordRegularExpression = /.{6,}/;
        const validPasswordTest = passwordRegularExpression.test(e.target.value);

        if(validPasswordTest){
            setPassword(e.target.value);
            setError("");
        }
        else{
            setError('At least 6 Characters');
            setPassword("")
        }


    }









    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email, password)
        signInWithEmailAndPassword(email, password)

        
    }


    return (
        <div className="signin-area" onSubmit={handleSubmit}>
        <div className="signin">Please Sign in</div> <br />
        <form className="Signin-form" >
            <input type="email" placeholder="Enter Email" onChange={handleEmailChange} />
            
            <input type="password" placeholder=" Enter Password" onChange={handlePasswordChange} /> <br />
            
            <button>Signin</button> <br />
            <small className='error'>{error}</small>
            
          
            <ToastContainer />
           

            <p>No account?  <b>Sign-up</b> </p>
            <div className="OR">-------------or-------------</div>
        </form>

        <button >SignIn with Google</button>
        <p><button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
    </div>
    );
};

export default Signin;