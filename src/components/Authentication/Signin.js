import React, { useState } from 'react';
import "./Signin.css"

const Signin = () => {

    const [email, setEmail] = useState("")










    const handleSubmit = (e)=>{
        e.preventDefault();
    }


    return (
        <div className="signin-area" onSubmit={handleSubmit}>
        <div className="signin">Please Sign in</div> <br />
        <form className="Signin-form" >
            <input type="email" placeholder="Enter Email" />
            <input type="password" placeholder=" Enter Password"  /> <br />
            
            <button>Signin</button>
           

            <p>No account?  <b>Sign-up</b> </p>
            <div className="OR">-------------or-------------</div>
        </form>

        <button >SignIn with Google</button>
        <p><button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
    </div>
    );
};

export default Signin;