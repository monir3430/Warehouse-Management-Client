import React, { useRef, useState } from 'react';
import {auth} from "../../firebase/firebase.init"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./Signin.css"
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import spinner from "../../images/spinner.gif"
import axios from 'axios';



const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    // use useref for reset password-----------------
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef();

    const passwordReset = async () => {
        const emailForReset = emailRef.current.value;
        if (emailForReset) {
            await sendPasswordResetEmail(emailForReset);
            toast('Mail Sent');
        }
        else{
            toast('Enter a valid Email');
        }
   


    }

    //------------------------------


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

    // Sign in with Google----------------------------
    const [gooleUser, setGoogleUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
          .then(result => {
            const user = result.user;
            setGoogleUser(user);
            console.log(user);
          })
          .catch(error => {
            console.error('error', error)
            
          })
      }


      // Navigation---------------------------------
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/home";

      if (loading) {
        return <p><img src={spinner} alt="" /></p>
    }
       
           if (user) {
            navigate(from, { replace: true }); 
           
          };
         
         


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email, password);
       signInWithEmailAndPassword(email, password);
       
       

        
    }


    return (
        <div className="signin-area" onSubmit={handleSubmit}>
        <div className="signin">Please Sign in</div> <br />
        <form className="Signin-form" >
            <input ref={emailRef} type="email" placeholder="Enter Email" onChange={handleEmailChange} />
            
            <input type="password" placeholder=" Enter Password" onChange={handlePasswordChange} /> <br />
            
            <button>Signin</button> <br />
            <small className='error'>{error}</small>
            
          
            <ToastContainer />
           

            <p>No account?  <Link to = '/signup'><b>Sign-up</b></Link> </p>
            <div className="OR">-------------or-------------</div>
        </form>

        <button onClick={handleGoogleSignIn}>SignIn with Google</button>
        <button className='reset-button' onClick={passwordReset}>Reset Password</button>
    </div>
    );
};

export default Signin;